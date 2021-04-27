/*
	

*/
import React , {useState, useCallback } from 'react';  

function HookCallback(){
	
	let [num,setNum] = useState(0);
	
	
	// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
	// 可以理解为和 vue 的计算属性相似的东西,会缓存结果,只有当依赖变化时才会重新计算,否则会缓存结果
	const memoizedCallback = useCallback(() => {
	    console.log(num)
	},[num]);
	
	return (
		<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
			<h3>这是 Hook 组件 useCallback 使用示例</h3>
			<p>num 的值为: {num},当它改变时会触发 useCallback,这样 memoizedCallback 就会更新</p>
			<input type="button" value=" + " onClick={()=> setNum(num + 1)} />
			&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="button" value=" - " onClick={()=> setNum(num - 1)} />
			<br/>
			<input type="button" value="打印 num" onClick={()=> memoizedCallback()} />
		</div>
	)
}

export default HookCallback