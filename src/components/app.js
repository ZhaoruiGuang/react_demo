import React, { Component } from 'react';
import LottieControl from './lottie.js';
import Hookdemo from './hook.js';
import Child1 from './child_1.js';   // class 组件
import Child2 from './child_2.js';	 // 函数组件
import LazyComponent from './lazy_load.js';	 // 函数组件
import ErrorBoundary from './errorBoundary.js';	 // 错误边界组件/捕获错误组件
import Error from './error.js';	
import ContextTest from './context.js';	
import HookContext from './hook_useContext.js';	
import ClassRefTextInput from './ref_class.js';	  	// class 组件应用 ref
import FuncRefTextInput from './ref_function.js';	// 函数组件应用 ref
import FuncProps from './props_function.js';
import UpdateContral from './update_contral.js';
import DefaultProps from './default_props.js';
import HookReducer from './hook_useReducer.js';
import HookReducer2 from './hook_useReducer2.js';
import HookCallback from './hook_useCallback.js';
import HookRef from './hook_useRef.js';

import { connect } from 'react-redux'
import { changeCount,changeCountAsync,undateTestState } from '../redux/actions.js'

let userData = {
	name:'小黑',
	age:'18'
}

// export const {Provider,Consumer} = React.createContext(userData);
export const MyContext = React.createContext(userData);

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
			'refInputFocus',
		].forEach(item => this[item] = this[item].bind(this));   // 给每一个方法绑定 this
		
		this.parentRef = React.createRef();
		this.parentRef2 = React.createRef();
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
	
	// 点击父组件按钮,让子组件里的 input 框聚焦
	refInputFocus(){
		this.parentRef.current.focusText();
		console.log(this.parentRef.current)		// 整个 class 组件
		console.log(this.parentRef.current.state.name)
		console.log(this.parentRef2.current)    // dom 元素 : p 标签
	}
	
	changeName(){
		this.setState({
			name:'新名字'
		})
	}
	
	render(){
		
		console.log('app.js  render')
		
		return (
			<MyContext.Provider value={userData}>
				<div style={{'padding':'0 0 100px 0'}}>
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
					
					<br/><br/>
					<div onClick={()=>this.changeName()}>点击我更改 state.name,看 children 1 怎么变化 </div>
					
					<Child1 name={this.state.name}></Child1>
					{ Child2({name:'小红'}) }
					<Child2 name="小红"></Child2>
					
					<ErrorBoundary>
						<Error></Error>
					</ErrorBoundary>
					
					<ClassRefTextInput ref={this.parentRef}></ClassRefTextInput>
					<FuncRefTextInput ref={this.parentRef2}>这是props.children</FuncRefTextInput>
					<span onClick={this.refInputFocus} style={{'display':'block','margin':'0 0 50px 0'}}>点我可以让ref组件里的 input 框聚焦</span>
					
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
					
					<br/><br/>
					<FuncProps></FuncProps>
					
					<UpdateContral></UpdateContral>
					
					<DefaultProps />
					
					<ContextTest></ContextTest>
					<HookContext></HookContext>
					<HookReducer></HookReducer>
					<HookReducer2></HookReducer2>
					<HookCallback></HookCallback>
					<HookRef></HookRef>
					
				</div>
			</MyContext.Provider>
			
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
