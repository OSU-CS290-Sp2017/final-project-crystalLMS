$("#topic-list").ready(function(){
	$.ajax({
		type:"get",
		url:"list_topic.php",
		async:true,
		success:function(data){
			var json=eval(data);

				$.ajax({
					type:"get",
					url:"is_admin.php",
					async:true,
					success:function(d_a){
						var t=eval(d_a);
						if(t[0].isadmin==1){
								for(var i=0;i<json.length;i++){
								var no=i+1;
								var app_html='<div class="t_item"><a class="t_list_title" data-tid='+json[i].tid+' onclick="view(this)">'+json[i].title+'</a><button data-tid='+json[i].tid+' class="btn btn-dangerous t_list_button" onclick="delete_topic(this)"><i class="fa fa-trash-o"></i></button></div>';
								$("#topic-list").append(app_html);		
							}
						}else{
								for(var i=0;i<json.length;i++){
								var no=i+1;
								var app_html='<div class="t_item"><a class="t_list_title" data-tid='+json[i].tid+' onclick="view(this)">'+json[i].title+'</a></div>';
								//alert(app_html);
								$("#topic-list").append(app_html);
							}
						}
					}
				});

		}
	});
});
function delete_topic(obj){
	var tid=$(obj).data("tid");
	$.ajax({
		type:"get",
		url:"delete_topic.php",
		data:{tid:tid},
		success:function(d){
			layer.msg("Delete Success!",{icon:1,time:2000});
			var e=setTimeout("window.location.href='topic_list.html'",2000);
		}
	});
}

function view(obj){
	var tid=$(obj).data("tid");
   window.location.href="topic_view.html?tid="+tid;
}

$(document).ready(function(){
$("#c_topic").click(function(){
	$('#first-modal').attr("style","display: block;");
	$('#ctm').attr("style","display: block;");
});
$('#c_sumbit').click(function(){
	var n_t=$('#input-title').val();
	var n_txt=$("#input-topic").val();
	$.ajax({
		type:"post",
		url:"add_topic.php",
		async:true,
		data:{title:n_t,txt:n_txt},
		success:function(data_i){
			$("#input-topic").attr('value','');
			$("#input-title").attr('value','');
            layer.msg("Create Topic Success!",{icon:1,time:2000});
            setTimeout("window.location.href='topic_list.html'",2000);
		
		}
	});
});
$('#c_cancel').click(function(){
  	$('#first-modal').attr("style","");
	$('#ctm').attr("style","");
		$("#input-topic").attr('value','');
		$("#input-title").attr('value','');
});
});





