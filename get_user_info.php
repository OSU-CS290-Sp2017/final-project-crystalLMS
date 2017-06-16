<?php
include './lib/mysql_contral.php';
include './lib/session_mem_classmode.php';
include './lib/class_other.php';
$sess=new session_memcache();
if(isset($_SESSION['uid'])){
	$r[0]['avatar']=$_SESSION['avatar'];
$r[0]['usr']=$_SESSION['usr'];
$r[0]['lastip']=$_SESSION['lastip'];
$r[0]['lastlogin']=$_SESSION['lastlogin'];
$r[0]['uid']=$_SESSION['uid'];
echo json_encode($r);}

?>