import React from 'react'

class ContextTest extends React.Component{
	constructor(args){
		super(args)
	}
	
	static contextType = UserDataContext;
	render(){
		return (
			<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
				<h3>这是 context 传值测试组件,当前登录的用户是{contextType.name}</h3>
			</div>
		)
	}
}

export default ContextTest