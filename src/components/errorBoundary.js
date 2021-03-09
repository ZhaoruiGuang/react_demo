import React from 'react';

/*

如果一个 class 组件(函数组件不行的)中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，	请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。

	错误边界无法捕获以下场景中产生的错误：
	1 事件处理（了解更多）
	2 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
	3 服务端渲染
	4 它自身抛出来的错误（并非它的子组件）
	
	总结:
	错误边界只能捕获生命周期钩子和dom渲染代码里的错误,自定义方法里的无法捕获

*/

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError(error) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return {
			hasError: true
		};
	}

	componentDidCatch(error, errorInfo) {
		// 你同样可以将错误日志上报给服务器
		console.log(error)
		console.log(errorInfo)
	}

	render() {
		if (this.state.hasError) {
			// 你可以自定义降级后的 UI 并渲染
			return <h3> ErrorBoundary 捕获到了子组件里的错误,显示了这个备用 UI,否则会导致整个页面无法展示...</h3>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary