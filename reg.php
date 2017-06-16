<?php
include './lib/mysql_contral.php';
include './lib/session_mem_classmode.php';
include './lib/class_other.php';
$sess=new session_memcache();
$db=new db_contral();
$db->connect_db();
if(isset($_POST['pwd'])&&isset($_POST['usr'])){
	$o=new other_func();
    $salt=$o->random(8, 0);
	$pwd=$_POST['pwd'].$salt;
	$pwd=md5($pwd);
	if(is_uploaded_file($_FILES['avatar']['tmp_name'])){
		$extend=explode(".",$_FILES['avatar']['name']);
		$extend=$extend[count($extend)-1];
		$nss=$o->random(16, 0);
		$nss=$nss.'.'.$extend;
		move_uploaded_file($_FILES['avatar']['tmp_name'], './avatar/'.$nss);
		$avatar='./avatar/'.$nss;
	}else{
		$avatar='';
	}
	$ip=$o->getIp();
	$r=$db->db_query_n1('acc','usr',$_POST['usr']);
	if(!count($r)){
		$usr=$_POST['usr'];
	   	$db->ins_data('acc', array('usr','pwd','salt','avatar','is_admin','lastip'), array($usr,$pwd,$salt,$avatar,0,$ip));
		$s[0]['status']=1;
	}
	else{
		$s[0]['status']=0;
	}
   echo json_encode($s);
}
?>