import React, {useState} from 'react';

function Hookdemo(){
	let [count,setCount] = useState(0);
	
	function addCount(){
		setCount(count + 1);
	}
	console.log('更新了 hooks --')
	return (
		<div>
			<p>你点击了 {count} 次</p>
			<span onClick={addCount}>点我</span>
		</div>
	)
}

export default Hookdemo