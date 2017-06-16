function ajex_login(){
	$.ajax({
		type:"post",
		url:"login.php",
		async:true,
		data:$("#login_form").serialize(),
		success:function(req){
			var json=eval(req);
			console.log(json);
			if(json[0].status==1){
				window.location.href="dashboard.html";
			}
			else{
				 	layer.msg('<span style="color:#000000">User Or Password Error!</span>',{icon: 2,time:2000});
				 	var t=setTimeout("window.location.href='login.html'",2000);
			}
		}
	});
}
