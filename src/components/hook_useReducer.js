/*
	useReducer 与 redux 不是同一个概念和作用,而是 useState 的替代方案,仅适用于本组件内,不能做全局广播;
	即使使用了 redux 全局的 reducer 和全局的 state, dispatch 一个 action 之后,更新 state 也之后在本组件内生效
	
	某些 特殊场景,useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等

*/
import React , { useReducer } from 'react';
import reducers from '../redux/reducers.js';
import defaultState from '../redux/defaultState.js';     

function HookReducer(){
	
	// 这里使用 redux 的 reducer 和 state,但改变之后其他组件里的 state 依然不会响应式变化
	// 应该是 hooks 自己圈定了作用域
	const [state, dispatch] = useReducer(reducers, defaultState);  
	
	return (
		<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
			<h3>这是 Hook 组件 useReducer 使用示例</h3>
			<p>useReducer 与 redux 不是同一个概念和作用,而是 useState 的替代方案,仅适用于本组件内,不能做全局广播;</p>
			<p>只会影响本组件里的相关状态,不能相互影响,例如这上下两个组件之间的 count 就不会相互影响</p>
			<br/>
			<p>{state.count}</p>
			<input type="button" value="+conut" onClick={()=> dispatch({type:'add_count',payload:state})} />
			&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="button" value="-conut" onClick={()=> dispatch({type:'red_count',payload:state})} />
		</div>
	)
}

export default HookReducer