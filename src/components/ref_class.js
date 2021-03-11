import React from  'react';

class ClassRefTextInput extends React.Component{
	constructor(arg) {
	    super(arg);
		this.textRef = React.createRef();
		this.focusText = this.focusText.bind(this);
		this.textChange = this.textChange.bind(this);
		this.state = {
			inputVal:'',
			name:'class ref 组件'
		}
	}
	
	// 点击按钮,主动触发输入框聚焦
	focusText(){
		this.textRef.current.focus();
	}
	
	textChange(e){
		this.setState({
			inputVal:e.target.value
		})
	}
	
	render(){
		return (
			<div style={{'margin':'50px 0 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
				<h3>class 组件中 ref 的使用(组件内使用, 以及父组件调用子组件方法)</h3>
				<input type="text" value={this.state.inputVal} ref={this.textRef} onChange={this.textChange}/>
				<input type="button" value="点我可以聚焦输入框哦" onClick={this.focusText} />
				<p>您当前输入的内容是:{this.state.inputVal}</p>
			</div>
		)
	}
}

export default ClassRefTextInput