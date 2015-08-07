'use strict';
var len_0=/[\x00-\x1f\x7f]/g;
var len_2=/[\u2e80-\u4db5\u4e00-\u9fcc\ua000-\ua4c6\uac00-\ud7a4\uf900-\ufa6d]/g;

function match(str,regex){
	var result=str.match(regex);
	return result? result.length:0;
}
function strWidth(str){
	return str.length-match(str,len_0)+match(str,len_2);
}

module.exports=function (str,tabWidth){
	if(tabWidth===undefined)
		tabWidth=8;
	if(!tabWidth) return strWidth(str);

	var tabWidthCount=0;
	var startAt=0;
	var findAt;
	while((findAt=str.indexOf('\t',startAt))!==-1){
		tabWidthCount+=tabWidth-strWidth(str.slice(startAt,findAt))%tabWidth || tabWidth;
		startAt=findAt+1;
	}
	
	return strWidth(str)+tabWidthCount;
}