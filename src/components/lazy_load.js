import React, { Suspense } from 'react';

const LazyChild = React.lazy(() => import('./lazy_child'));

// 在 Suspense 组件中渲染 lazy 组件,fallback 是加载时的占位信息
class LazyComponent extends React.Component{
	constructor(arg) {
	    super(arg);
	}

	render(){
		return (
			<Suspense fallback={<div>懒加载组件加载中...</div>}>
				<LazyChild name="小花"></LazyChild>
			</Suspense>
		)
	}
}

export default LazyComponent