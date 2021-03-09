import React from 'react';

class Error extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'zhao'
		}
	}
	
	errorFunc(e){
		console.log(this.state.a)   // 这里有错误,会报错,因为 this 未绑定,,但是 ErrorBoundary 无法捕获事件处理里的错误
	}
	
	componentWillMount(){
		console.log(this.state.a)	// 这里有错误,因为 this.state 未定义,所以 this.state.a 会报错,可以被 ErrorBoundary 捕获
		setTimeout(()=>{
			
			console.log(b)            // 这里有错误,因为 b 未定义,可以被 ErrorBoundary 捕获
		})
	}
	

	updateName(){
		this.setState({
			name:'li'
		})
	}
	render() {
		return (
			<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
				这是 error 组件,它的错误会被 ErrorBoundary 组件捕获,并展示备用 UI
				
			</div>
		)
	}
}

export default Error