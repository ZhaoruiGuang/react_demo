/*
	hook 中 context 的使用:
	
	useContext 的参数必须是 context 对象本身：
	
	正确： useContext(MyContext)
	错误： useContext(MyContext.Consumer)
	错误： useContext(MyContext.Provider)
*/

import React , { useContext } from 'react';
import { MyContext } from './app.js'

function HookContext(){
	let contextData = useContext(MyContext);
	
	return (
		<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
			<h3>这是 Hook 组件 context 使用示例,当前登录的用户是: {contextData.name}</h3>
		</div>
	)
}

export default HookContext