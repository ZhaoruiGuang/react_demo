import React , { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function HookReducer2(){
	
	const [state, dispatch] = useReducer(reducer, initialState);
	
	return (
		<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
			<h3>这是 Hook 组件 useReducer 使用示例</h3>
			<p>{state.count}</p>
			<button onClick={() => dispatch({type: 'decrement'})}>-conut</button>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<button onClick={() => dispatch({type: 'increment'})}>+conut</button>
		</div>
	)
}

export default HookReducer2