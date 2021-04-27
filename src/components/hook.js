import React, {useState,useEffect } from 'react';
import useTimerHook from './hook_custom.js';

function Hookdemo(props){
	let [count,setCount] = useState(0);
	let [age,setAge] = useState(18);
	let [random,setRandom] = useState(0);
	
	let [num,setNum] = useState(1);
	let myTimer = useTimerHook(num);   // 使用自定义 hook,将初始值进行计算,得到新值
	
	function addCount(){
		setCount(count + 1);
	}
	console.log('更新了 hooks --')
	
	// 操作数据的副作用集合
	// 相当于 componentDidMount 和 componentDidUpdate:
	useEffect(() => {
	    // 使用浏览器的 API 更新页面标题
		console.log('监听全部 state 的 useEffect --- ')
		console.log(props.title)
	});
	
	useEffect(() => {
	    // 使用浏览器的 API 更新页面标题
		console.log('此 effect 仅在初始化时执行一次')
	},[]);// 传空数组,仅在初始化时执行一次
	
	useEffect(() => {
	    // 使用浏览器的 API 更新页面标题
		console.log('只监听 age 的 useEffect --- ')
	},[age]);// 仅在 age 更改时执行
	
	useEffect(() => {
	    // 使用浏览器的 API 更新页面标题
		console.log('只监听 random 的 useEffect --- ')
		console.log(random)
	},[random]);// 仅在 random 更改时执行
	
	// 如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它
	// React 会在执行当前 effect 之前对上一个 effect 进行清除
	let i=0;
	let timer = null;
	useEffect(() => {
		// 清除旧计时器,并设置新的计时器
		// timer = setInterval(()=>{
		// 	i+=1;
		// 	console.log('hook 计时器' + i)
		// },2000);
	 //    return function clearTimer(){
		// 	clearInterval(timer);
		// }
	},[random]); // 仅在 random 更改时执行
	  
	return (
		<div style={{'margin':'50px 0 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
			<h3>Hook 组件</h3>
			<p>本组件接收的 props title 是: {props.title}</p>
			<p>你点击了 {count} 次</p>
			<input type="button" value="点我增加次数" onClick={addCount} />
			<p>今年我 {age} 岁</p>
			<input type="button" value="点我涨一岁" onClick={()=>setAge(age + 1)} />
			<p>这是一个随机数:{random}</p>
			<input type="button" value="点我生成新的随机数" onClick={()=>setRandom(Math.random())} />
			<p>传入自定义 hook 的值: {num} ,自定义 hook 计算后的数值:{myTimer}</p>
		</div>
	)
}

export default Hookdemo