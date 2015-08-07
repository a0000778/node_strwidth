var strwidth=require('./index.js');

console.log('Result: %s',
[
	['a',1],
	['abc',3],
	['a\tb',9],
	['abcdefgh\ti',17],
	['中文\t中文',12],
	['中文字串\t中文',20]
].reduce(function(result,item){
	var test=strwidth(item[0])===item[1];
	console.log('strwidth(%j) === %d : %s',item[0],item[1],test? 'OK':'Fail');
	return test && result;
},true)
? 'OK':'Fail');