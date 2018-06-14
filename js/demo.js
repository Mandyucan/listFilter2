
//将拼接的元素插入到ul
var oUl = document.getElementsByTagName('ul')[0];
//获取input框
var oInput = document.getElementsByClassName('search-box')[0];
var oP = document.getElementsByTagName('p')[0];

//渲染数据 
function renderPage(list) {
	var str = '';
	list.forEach(function(ele,index) { //（遍历、拼接字符串）
		str += '<li>\
					<img src="img/'+ ele.src +'" alt="">\
					<p>'+ ele.name +'</p>\
					<p>'+ ele.des +'</p>\
				</li>'
	})
	oUl.innerHTML = str;
}
renderPage(personArr);

var store = createStore({  //最初始状态
	text: '',
	sex: 'a'
});

store.subScribe(function (){
	renderPage(lastFilter());
});

//绑定input事件
oInput.oninput = function() {
	store.setState ({type:'text', value: this.value});
}

// // 根据input框中输入的值进行筛选新数组
// function filterText(text,arr) {
// 	return arr.filter(function(ele,index){
// 		if(ele.name.indexOf(text) != -1 || ele.des.indexOf(text) != -1) {  //判断输入的值是否含有text，如果前面的字符串包含了text，会返回这个字符串在哪个位置‘abc’.indexof (b),找到b的索引，返回1；如果没有返回-1；
// 			return true;
// 		}
// 	})
// }

//给span绑定点击事件
oP.addEventListener('click',function(e) { //选中p标签，冒泡事件委托
	// console.log(888); //点击span时会触发、空白地方也会触发
	if(e.target.tagName == 'SPAN') {
		store.setState({ type:'sex', value: e.target.getAttribute('sex')})
		document.getElementsByClassName('active')[0].className = '';
		e.target.className = 'active';
	
	}			
})
