import React from 'react';
import PropTypes from 'prop-types';

class DefaultProps extends React.Component {
	render() {
		return (
			<div style={{'margin':'50px 0','backgroundColor':'#f5f2f0','padding':'30px 20px'}}>
				<h2>Hello, {this.props.title}</h2>
				<h2>Hello,今年我 {this.props.age} 岁了</h2>
			</div>
			
		);
	}
}

// 指定 props 的默认值：
DefaultProps.defaultProps = {
	title: '这是默认 props title'
};

DefaultProps.propTypes = {
	age:PropTypes.number.isRequired    // 规定 age 是 number 类型并且必传 --- 不满足规则会在控制台报错,但是并不会影响页面展现
}

export default DefaultProps