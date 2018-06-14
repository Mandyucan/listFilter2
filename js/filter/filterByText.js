function filterText(text,arr) {
	return arr.filter(function(ele,index){
		if(ele.name.indexOf(text) != -1 || ele.des.indexOf(text) != -1) {  //判断输入的值是否含有text，如果前面的字符串包含了text，会返回这个字符串在哪个位置‘abc’.indexof (b),找到b的索引，返回1；如果没有返回-1；
			return true;
		}
	})
}