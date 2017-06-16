function load_user(){
      $.ajax({
      	type:'get',
      	url:"get_user_info.php",
      	success:function(data){
           var j_ann=eval(data);
            $('#user-name').append(j_ann[0].usr);
            $('#last-ip').append(j_ann[0].lastip);
            $('#last-login').append(j_ann[0].lastlogin);
           }
      });
}
$("#user-info").ready(
     function(){
     	load_user();
     }
);
$("#announce").ready(function(){
	$.ajax({
		type:"get",
		url:"view_announce.php",
		success:function(data){
			var ja=eval(data);
			for(var i=0;i<ja.length;i++){
				var appstr=ja[i].txt+'<hr>';
				$("#announce").append(appstr);
			}
		}
	});
	$.ajax({
		type:"get",
		url:"is_admin.php",
		async:true,
		success:function(data){
			var j_ad=eval(data);
			if(j_ad[0].isadmin==1){
			  		$('#c_announce').attr("style","display: block;");
			}
	}});
});
$(document).ready(function(){
	
	$('#c_sumbit').click(function(){
	var n_t=$('#input-announce').val();
	$.ajax({
		type:"post",
		url:"add_announce.php",
		async:true,
		data:{txt:n_t},
		success:function(data_i){
			$("#input-announce").attr('value','');
            layer.msg("Create announce Success!",{icon:1,time:2000});
            setTimeout("window.location.href='dashboard.html'",2000);
		}
	});
});

$('#c_cancel').click(function(){
  	$('#first-modal').attr("style","");
	$('#ctm').attr("style","");
		$("#input-announce").attr('value','');
});

$("#c_announce").click(function(){
	$('#first-modal').attr("style","display: block;");
	$('#ctm').attr("style","display: block;");
});
});


