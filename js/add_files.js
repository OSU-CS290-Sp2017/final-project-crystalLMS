function sumbit_file(){
		$.ajax({
		type:"post",
		url:"add_files.php",
		async:true,
		data:new FormData($('#')[0]),
		processData:false,
		success:function(data){
			layer.msg("File Uploaded Success!",{icon:1,time:2000});
            setTimeout("window.location.href='file_list.html'",2000);
			}
		}
	});
}
