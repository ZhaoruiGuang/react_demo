/*
	class 组件中的 context 的使用
*/

import React from 'react'
import { MyContext } from "./app.js";	//引入父组件的Consumer容器

class ContextTest extends React.Component{
	
	render(){
		return (
			<MyContext.Consumer>
				{
					(contextData)=> (
						<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
							<h3>这是 class 组件 context 使用示例,当前登录的用户是: {contextData.name}</h3>
						</div>
					)
				}
			</MyContext.Consumer>
			
		)
	}

}

export default ContextTest