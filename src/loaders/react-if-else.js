// const loaderUtils = require("loader-utils");

module.exports = function(source) {
	
	// const options = loaderUtils.getOptions(this);
	// console.log(options)

	if(source.indexOf('<if') > -1 && source.indexOf('</if>') > -1){       // 首先判断有没有自定义的 if-else 语句
		let ifReg = /<if([\s\S]*?)>([\s\S]*?)<\/if>/g;		
		/*
			1.这里用 [\s\S] ,而不能用 . ,因为 . 不能匹配换行符
			2. * 是贪婪的，它会尽可能多的匹配文字，在它后面加上一个 ? ,实现非贪婪或最小匹配
		*/
		let ifArr = source.match(ifReg)   // 获取所有 <if></if> 标签
		console.log(ifArr)
		if(ifArr&&ifArr.length){
			for(let i=0;i<ifArr.length;i++){
				
				let testElseReg = /<\s*else\s*\/\s*>/g;		   
				let isHaveElse = testElseReg.test(ifArr[i]);	// 检查每一项 if 语句中,是否包含 else
				let getDataReg = null;
				if(isHaveElse){
					getDataReg = /condition\s*=\s*{\s*(\w*[\s*|\S*]*\w*)\s*}\s*>([\s*|\S*]*)<\s*else\s*\/\s*>([\s*|\S*]*)<\/if>/g;
				}else{
					getDataReg = /condition\s*=\s*{\s*(\w*[\s*|\S*]*\w*)\s*}\s*>([\s*|\S*]*)<\/if>/g;
				};
				ifArr[i].match(getDataReg);
				let condition = RegExp.$1 || '';
				let dom1 = RegExp.$2 || '';
				let dom2 = RegExp.$3 || '';
				let newStr = `{
					(${condition}) ? (<React.Fragment>${dom1}</React.Fragment>) : (<React.Fragment>${dom2}</React.Fragment>)
				}`
				let sourceArr = source.split(ifArr[i]) || [];  // 将源码分割,重新拼接
				source = sourceArr[0] + newStr + sourceArr[1];
			};
			console.log(source)
		}
	}
	
	return `${ source }`;

};
