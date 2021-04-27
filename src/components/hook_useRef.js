/*
	
*/

import React , { useState,useEffect,useRef } from 'react';

function HookRef(){
	
	const [count, setCount] = useState(0);
	
	const prevCountRef = useRef();
	
	useEffect(() => {
		// 因为 useRef 的值变化,不会引起重新渲染,所以用 useRef 存储变量,相当于普通变量
		// 并且 useEffect 是在渲染结束之后才会调用的,所以 prevCountRef.current 存储的实际是上一次改变后的值
	    prevCountRef.current = count;	
	});
	
	const prevCount = prevCountRef.current;
	
	return (
		<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
			<h3>这是 Hook 组件 useRef 使用示例</h3>
			<p>Now: {count}, before: {prevCount}</p>
			<button onClick={() => setCount(count + 1)}>+</button>
		</div>
	)
}

export default HookRef