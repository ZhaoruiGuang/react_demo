import React from 'react';

class LazyChild extends React.Component{
	constructor(arg) {
	    super(arg);
	}

	render(){
		return (
			<div>这是一个被懒加载的组件....</div>
		)
	}
}

export default LazyChild