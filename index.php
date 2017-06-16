<?php
include './lib/mysql_contral.php';
include './lib/session_mem_classmode.php';
include './lib/class_other.php';
$sess=new session_memcache();
$o=new other_func();
if(isset($_SESSION['uid'])){
	$o->jref("dashboard.html");
}else{
	$o->jref("login.html");
}
?>