import React from 'react';

let FuncRefTextInput = React.forwardRef((props,ref)=>{
	return (
		<div style={{'backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
			<h3>函数组件中 ref 的使用</h3>
			<p>{props.children}</p>
			<p ref={ref}>哈哈哈</p>
		</div>
	)
})

export default FuncRefTextInput