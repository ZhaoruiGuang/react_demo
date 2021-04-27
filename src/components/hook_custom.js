import React, {useState,useEffect } from 'react';

function useTimerHook(num){
	
	let [number,setNumber] = useState(num + 1);
	
	// 这里还可以封装更多的公共逻辑
	
	return number;
}

export default useTimerHook