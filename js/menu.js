$("#user_menu").ready(function(){
      $.ajax({
      	type:'get',
      	url:"get_user_info.php",
      	success:function(data){
           var j_ann=eval(data);
            $('#user_menu').append(j_ann[0].usr);
            $("#avatar").attr("src",j_ann[0].avatar);
           }
      });
});
