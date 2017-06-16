function load_data(data){
	var j_data = eval(data);
	$.ajax({
	type: "get",
	url: "is_admin.php",
	async: true,
	success: function(d_a){
			        var t = eval(d_a);
					if(t[0].isadmin == 1){
						for(var i=0; i < j_data.length; i++) {
							var app_str = '<div class="t_item">' + j_data[i].fname + '<a type="button" data-fid="' + j_data[i].fid + '" class="delete-button" onclick="delete_files(this)"><i class="fa fa-trash-o"></i></a><a type="button" id="" class="upload-button" href="./upload/' + j_data[i].rname + '"><i class="fa fa-download"></i></a></div>';
							$("#file-list").append(app_str);
						}
					}else{
					for(var i=0; i < j_data.length; i++) {
						var app_str = '<div class="t_item">' + j_data[i].fname + '"<a type="button" class="upload-button" href="./upload/' + j_data[i].rname + '"><i class="fa fa-download"></i></a></div>';
						$("#file-list").append(app_str);
					}}
	}
	});
}
$("#file-list").ready(function() {
	$.ajax({
		type: "get",
		url: "view_files.php",
		async: true,
		success: function(data){
			load_data(data);
		},
		error: function() {}
	});
});



$(document).ready(function(){
$("#upload").click(function(){
	$('#first-modal').attr("style","display: block;");
	$('#ctm').attr("style","display: block;");
});
$('#upload_submit').click(function(){
    var formData = new FormData($("#upload-form")[0]);  
	$.ajax({  
          url: 'add_files.php',  
          type: 'POST',  
          data: formData,  
          async: false,  
          cache: false,  
          contentType: false,  
          processData: false,  
          success: function (returndata) {  
			$("#upload-files").attr('value','');
			$("#fname").attr('value','');
            layer.msg("Add Files Success!",{icon:1,time:2000});
            setTimeout("window.location.href='file_list.html'",2000);
          },  
          error: function (returndata) {  
              alert(returndata);  
          }  
     });  
});
});
function delete_files(obj){
	var fid=$(obj).data('fid');
	$.ajax({
		type:"get",
		url:"delete_files.php",
		async:true,
		data:{fid:fid},
		success:function(data){
			layer.msg("Delete Files Success",{icon:1,time:1000});
			setTimeout("window.location.reload()",1000);
		}
	});
}
