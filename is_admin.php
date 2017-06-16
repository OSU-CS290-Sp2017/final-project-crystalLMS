<?php
include './lib/mysql_contral.php';
include './lib/session_mem_classmode.php';
$sess=new session_memcache();
if(isset($_SESSION['isadmin'])){
     $r[0]['isadmin']=$_SESSION['isadmin'];
	echo json_encode($r);
}
?>