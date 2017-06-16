$(document).ready(function(){
 	$("#sign_sumbit").click(function(){
 		var pwd=$('#pwd').val();
 		var pwd2=$('#pwd2').val();
 		if(pwd==pwd2){
 			var formData=new FormData($('#signup_form')[0]);
	$.ajax({  
          url: 'reg.php',  
          type: 'POST',  
          data: formData,  
          async: false,  
          cache: false,  
          contentType: false,  
          processData: false,  
          success: function (returndata) {  
	        var j=eval(returndata);
	        if(j[0].status==1){
	        	            layer.msg("Sign_up Success!",{icon:1,time:2000});
       setTimeout("window.location.href='login.html'",2000);
	        }
            else{
            	  layer.msg("Username have been used!",{icon:1,time:2000});
            }
          },  
          error: function (returndata) {  
              alert(returndata);  
          }  
     });  
 		}
 		else{
 			layer.msg("Password is not same!",{icon:2,time:2000});
 		}
 	});
});
