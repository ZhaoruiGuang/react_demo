let ADD_COUNT = 'add_count';
let RED_COUNT = 'red_count';
let LOADING = 'loading';
let TEST_STATE = 'testState';

// Action Creator。
let countCreater = (type,count) =>{
	return {
		type:type == 'add' ? ADD_COUNT : RED_COUNT,
		payload:count
	}
}
let loadingCreator = (type) =>{
	console.log(type)
	return {
		type:LOADING,
		payload:type,
	}
}



// dispatch 方法
// 同步
let changeCount = (type,count) => {
	return countCreater(type,count);   		// 普通的,返回一个对象,相当于直接 dispatch 一个 action
}
// 异步
let changeCountAsync = (type,count) =>{
	return dispatch => {					// 异步的，返回一个函数,相当于 dispatch 了一个函数
		dispatch(loadingCreator(true));
		setTimeout(() => {                 // 异步请求,模拟 ajax 请求
			dispatch(countCreater(type,count));
			dispatch(loadingCreator(false));
		}, 1000);
	};
}


let undateTestState = () =>{
	return {
		type:TEST_STATE,
		payload:Math.random(),
	}
}

export {
	changeCount,
	changeCountAsync,
	undateTestState,
}