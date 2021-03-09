const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');


module.exports = function(source) {
	
	if(source.indexOf('<if') > -1 && source.indexOf('</if>') > -1){       // 首先判断有没有自定义的 if-else 语句
		let ast = esprima.parseModule(source,{
			jsx:true,
		},function(node,meta){
			console.log('11111111111')
			console.log(node)
		});
		// console.log(ast)
		// estraverse.traverse(ast, {
		//     enter: function (node) {
		//         // node.kind = "var";
		// 		console.log(node)
		//     }
		// });
		// const transformCode = escodegen.generate(ast);
	}
	return `${ source }`;

};
