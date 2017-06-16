function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return "";
}
$("#discuss-topic").ready(function(){
	var topic_id=GetQueryString('tid');
	$.ajax({
		type:"get",
		url:"view_topic.php",
		data:{tid:topic_id},
		async:true,
		success:function(data){
			var json=eval("("+data+")");
			$("#topic-title").append(json.topic.title);
            $("#topic-txt").append(json.topic.txt);
            $("#topic-author").append(json.topic.usr);
            $("#topic-time").append(json.topic.add_time);
            for(var i=0;i<json.reply.length;i++){
            	var html='<div id="" class="panel panel-default" style=""><div id="" class="panel-body">'+json.reply[i].txt+'</div><div id="" class="panel-footer">Author:'+json.reply[i].usr+'ADD TIME:'+json.reply[i].add_time+'<div><div>';
 				$('#discuss-panel').append(html);
            }
		}
	});
});
function delete_topic(obj){
	var tid=$(obj).data("tid");
	layer.confirm('<span style="color:#000000">Confirm to delete topic?</span>',function(index){
		appid=$(obj).data('appid');
		//alert(appid);
		var aid=GetQueryString('aid');
	   $.ajax({
	   type:"post",
	   url:"delete_topic.php",
	   data:{tid:tid},
	   async:true,
	   success:function(data){
	   	layer.msg('<span style="color:#000000">Delete Success!</span>',{icon: 1,time:1000});
	   	window.location.href="topic_list.html";
	    }
	   });
	});
}
function edit_topic(){
	var tid=$(obj).data('tid');
	window.location.href=''+tid;
}
function add_comment(){
	var tid=GetQueryString('tid');
	var txt=$("#comment-txt").val();
	$.ajax({
		type:"post",
		url:"add_reply.php",
		async:true,
		data:{txt:txt,tid:tid},
		success:function(){
			layer.msg("Comment Sumbit Success",{icon:1,time:2000});
			$("#comment-txt").val('');
			var url='topic_view.html?tid='+tid;
			setTimeout("window.location.reload()",2000);
		}
	});
}
