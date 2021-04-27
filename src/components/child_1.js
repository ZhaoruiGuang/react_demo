import React from 'react'

class Child1 extends React.Component{
	constructor(props) {
	    super(props);
		this.state = {
			age:18,
			inputValue:'',
		};
		this.sayName = this.sayName.bind(this);  
		this.changeValue = this.changeValue.bind(this);  
	}
	
	componentWillMount(){
		console.log('child1 will mount~')
	}
	
	componentDidUpdate(){
		console.log('child1 updated~')
	}
	
	// props 变化监听,,,即将过时,不建议使用
	componentWillReceiveProps(props){
		console.log('child_1 received props',props)
	}
	
	componentWillUnmount(){
		console.log('child_1 will unmount')
	}
	
	// 监听 props 和 state 的变化,判断组件是否更新
	shouldComponentUpdate(nextProps, nextState){
		console.log('child_1  shoud update or not ?')
		console.log(nextProps,nextState)
		return true
	}
	
	sayName(e){
		console.log(this.props.name)
		console.log(e.target.innerHTML)
	}
	sayAge(){
		console.log(this.state.age)
	}
	changeValue(e){
		this.setState({
			inputValue:e.target.value
		})
	}
	
	render(){
		
		console.log('child_1  render ')
		
		return (
			<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
				<h3>Child1 里的内容:</h3>
				<div>我是{this.props.name}</div>
				<span onClick={this.sayName}>点击查看姓名</span>
				<br/>
				<span onClick={()=>this.sayAge()}>点击查看年龄</span>
				<br/>
				<br/>
				<div>
					<input type="text" value={this.state.inputValue} onChange={this.changeValue} />
					<p>您输入的内容是:  {this.state.inputValue}</p>
				</div>
			</div>
		)
	}
}

export default Child1