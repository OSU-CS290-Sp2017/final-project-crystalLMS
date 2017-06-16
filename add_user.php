<?php
include './lib/mysql_contral.php';
include './lib/session_mem_classmode.php';
include './lib/class_other.php';
if($_SESSION['isadmin']){
	$pwd=$_POST['pwd'];
	$usr=$_POST['usr'];
	$o=new other_func();
	$salt=$o->random(8, 0);
	
	$db->ins_data('acc', $item_arr, $data_arr)
}
?>