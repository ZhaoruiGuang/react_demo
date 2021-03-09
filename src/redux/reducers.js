import { combineReducers } from 'redux';
import { ignoreActions, filterActions } from 'redux-ignore';    // 性能优化篇

let ADD_COUNT = 'add_count';
let RED_COUNT = 'red_count';
let LOADING = 'loading';
let TEST_STATE = 'testState';

let count = (state=1,action) =>{
	console.log('每个 action 都会执行这个 reducer ~11111')
	switch (action.type){
		case ADD_COUNT:
			return state + 1;
		case RED_COUNT:
			return state - 1;
		default: 
			return state;
	}
}

let isLoading = (state=false,action) =>{
	console.log('每个 action 都会执行这个 reducer ~2222')
	switch (action.type){
		case LOADING:
			return action.payload;
		default:
			return state;
	}
}

// redux 默认无论发送哪个 action,都会将所有 reducer 执行一遍,考虑到性能优化,可以借助 redux-ignore 设置每个 reducer 不响应的 action
let testState = (state=1,action) =>{
	console.log('这里不会每个 action 都执行的,只有特定 action 才会执行')
	switch (action.type){
		case TEST_STATE:
			return action.payload;
		default:
			return state;
	}
}

export default combineReducers({
	count,
	isLoading,
	// testState:ignoreActions(testState,[ADD_COUNT,RED_COUNT,LOADING])    // ignoreActions: 规定不响应哪些 action
	// testState: ignoreActions(testState,(action)=>{
	// 	return action.type != TEST_STATE				// 2: 也可以用函数判断,满足条件的都是不响应的
	// })  
	testState:filterActions(testState,(action)=>{	// filterActions: 通过条件判断响应与否
		return action.type === TEST_STATE
	})
})