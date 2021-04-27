import React from 'react';
import { connect } from 'react-redux'

class UpdateContral extends React.Component{
	constructor(arg) {
	    super(arg);
	}
	
	// shouldComponentUpdate 规定了组件更新的条件: true 更新 , false 不更新
	shouldComponentUpdate(nextProps, nextState) {
	    if (this.props.count !== nextProps.count) {
	      return true;
	    }
	    return false;
	}
	render(){
		console.log('只有 count 变化时我才更新~')
		return (
			<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
				<h3>本组件只有在 count 发生变化时才会重新 render,其他时候不变</h3>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		count:state.count,
	}
}

export default connect(
	mapStateToProps,
)(UpdateContral)