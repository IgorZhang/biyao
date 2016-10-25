function getCookie(name){
	var cookie1 = document.cookie;

	//user=tangcaiye; pass=12345; xx=343;
	//user,tangcaiye; pass,12345
	var arr = cookie1.split("; ");

	for (var i=0; i<arr.length; i++){
		var arr2 = arr[i].split("=");
		//arr2[0]->user,arr2[1]->tangcaiye;  arr2[0]->pass,
		if (arr2[0]==name){
			return arr2[1];
		}
	}
	return false;
}

function setCookie(name,value,day){
	var date1 = new Date();

	var nowDate = date1.getDate();
	date1.setDate(nowDate+day);

	document.cookie = name+"="+value+"; expires="+date1;
}

function removeCookie(name){

	setCookie(name,".",-1);
}
