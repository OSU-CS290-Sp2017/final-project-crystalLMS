<?php
include './lib/session_mem_classmode.php';
include './lib/mysql_contral.php';
include './lib/class_other.php';
$sess=new session_memcache();
if($_SESSION['isadmin']==1){
	$db=new db_contral();
	$db->connect_db();
	$db->ins_data('announce', array('txt'), array($_POST['txt']));
}
?>