function filterSex(sex,arr) {
	if(sex == 'a') {
		return arr;
	}else{
		return arr.filter(function(ele,index) { //筛选出来 return出去
			if(sex == ele.sex) {
				return true;
			}
		})	
	}	
}