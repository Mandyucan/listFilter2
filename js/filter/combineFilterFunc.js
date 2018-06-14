function combineFilterFunc(obj,arr) {
	return function() {  //闭包 内部的函数存储在外部（全局作用下）
		var lastArr = arr;
			for (var prop in obj) {
				 lastArr = obj[prop](store.getState()[prop],lastArr);//用个变量接收，再把它当参数传进来
			}
			return lastArr; //最后将结果return
	}
}
var lastFilter  = combineFilterFunc({text: filterText, sex: filterSex},personArr) //需要筛选更多条件时，可以直接在这里添加