<?php
include './lib/mysql_contral.php';
include './lib/session_mem_classmode.php';
$sess=new session_memcache();
if(isset($_SESSION['uid'])){
	$db=new db_contral();
	$db->connect_db();
	$r=$db->db_query_n1('announce', 'aid', 0,'!=',0);
	echo json_encode($r);
}
?>