import React from 'react';

function PropFuncItem(props){
	let items = [];
	for(let i=0;i<props.times;i++){
		items.push(props.children(i))
	}
	
	return (
		<div>{items}</div>
	)
}

export default PropFuncItem