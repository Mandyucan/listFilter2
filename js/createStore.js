function createStore(inistore) {  //进行管理
	var state = inistore || {};  //防止变量污染
	var list = []; //需要哪些函数就将函数push其中
	function getState () {
		return state;
	} 

	function setState(action) {
		state[action.type] = action.value;
		list.forEach(function(ele,index) {
			ele();
		})
	}

	function subScribe(func) {
		list.push(func);  //当状态发生改变时，进行循环遍历
	}

	return {  //外部函数要使用就要return出来
		getState: getState,
		setState: setState,
		subScribe: subScribe
	}
}