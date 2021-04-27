import React from 'react';
import PropFuncItem from './props_function_item.js'

class FuncProps extends React.Component{
	
	render(){
		return (
			<PropFuncItem times={10}>
				{(index)=> <div key={index}>这是第 {index} 个元素</div> }
			</PropFuncItem>
		)
	}
}

export default FuncProps