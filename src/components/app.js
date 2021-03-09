import React, { Component } from 'react';
import LottieControl from './lottie.js';
import Hookdemo from './hook.js';
import Child1 from './child_1.js';   // class 组件
import Child2 from './child_2.js';	 // 函数组件
import LazyComponent from './lazy_load.js';	 // 函数组件
import ErrorBoundary from './errorBoundary.js';	 // 错误边界组件/捕获错误组件
import Error from './error.js';	
import ContextTest from './context.js';	

import { connect } from 'react-redux'
import { changeCount,changeCountAsync,undateTestState } from '../redux/actions.js'

let userData = {
	name:'li',
	age:'18'
}
let UserDataContext = React.createContext(userData)

class App extends Component{
	constructor(props) {
	    super(props);
		this.state = {
			name:'小明',
			age:'8',
			title:'这是来自 app.js 的 prop 数据'
		};
		
		[
			'addCount',
			'mySelfTag',
		].forEach(item => this[item] = this[item].bind(this));   // 给每一个方法绑定 this
	}
	componentWillMount(){
		console.log('app.js will mount')
	}
	componentDidMount(){
		console.log('app.js did mount')
		
		setTimeout(()=>{
			this.setState({
				title:'这是来自 app.js 的 prop 数据 -- 更新了'
			})
		},2000)
	}
	addCount(type){
		// changeCount()
		if(type == 'add'){
			this.props.changeCount(type,this.props.count)
		}else{
			this.props.changeCountAsync(type,this.props.count)
		}
	}
	
	mySelfTag(){
		return ''
		
		return (
			<div>
				<if condition = { 2 > 1 || 2 > 3 }>
					<span>这是 if </span>
					哈哈哈
				<else/>
					<p>这是 else </p>
				</if>
				
				<if condition={2>1}>
					<p>这是单个 if</p>
				</if>
			</div>
		)
	}
	
	render(){
		
		console.log('更新了 app.js --')
		
		return (
			<UserDataContext.Provider value={userData}>
				<div>
					<h2>Hello, world !</h2>
					
					{
						2 > 1 ?
						(
							<p>这是原生判断</p>
						)
						: ""
					}
					
					{this.mySelfTag()}
					
					<LottieControl title={this.state.title}></LottieControl>
					<Hookdemo title={this.state.title}></Hookdemo>
					
					<LazyComponent></LazyComponent>
					
					<Child1 name="小明"></Child1>
					{ Child2({name:'小红'}) }
					
					<ErrorBoundary>
						<Error></Error>
					</ErrorBoundary>
					
					<ContextTest></ContextTest>
					
					
					{
						this.props.isLoading
						? (<p> loading ...</p>)
						: (<p>这是 redux 的 count : {this.props.count}</p>)
					}
					
					<span onClick={() => this.addCount('add')} style={{'cursor':'pointer','backgroundColor':'#eee','margin':'5px'}}>同步 +</span>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<span onClick={() => this.addCount('red')} style={{'cursor':'pointer','backgroundColor':'#eee','margin':'5px'}}>异步 -</span>,
					
					<br/>
					
					<span onClick={this.props.undateTest}>只有点击我才会执行 testState reducer</span>
				</div>
			</UserDataContext.Provider>
			
		)
	}
}

const mapStateToProps = (state) => {
	return {
		count:state.count,
		isLoading:state.isLoading,
		testState:state.testState,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeCount:(type,num) => {
			dispatch(changeCount(type,num))
		},
		changeCountAsync:(type,num) => {
			dispatch(changeCountAsync(type,num))
		},
		undateTest:()=>{
			dispatch(undateTestState())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
