import React from 'react';

let Child2 = (props) =>{
	
	function sayName(){
		console.log(props.name)
	}
	
	
	return (
		<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
			<h3>Child2 里的内容:</h3>
			<div>我是{props.name}</div>
			<span onClick={sayName}>点击查看姓名</span>
		</div>
	)
}

export default Child2