function change_pwd(){
	$.ajex(
		type:"post",
		data:$("").serialize(),
		success:function(data){
			var  j=eval(data);
			if(j[0].status){
			   	layer.msg('<span style="color:#000000">Change Password Success!</span>',{icon: 1,time:1000});
			}
			else{
					   	layer.msg('<span style="color:#000000">Error!</span>',{icon: 2,time:1000});
			}
		}
	)
}
