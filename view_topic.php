<?php
include './lib/mysql_contral.php';
include './lib/session_mem_classmode.php';
$sess=new session_memcache();
if(isset($_GET['tid'])&&isset($_SESSION['uid'])){
	$db=new db_contral();
	$db->connect_db();
	$r=$db->all_query_stmt('SELECT tid,title,txt,add_time,topic.uid,usr From acc,topic WHERE acc.uid=topic.uid and tid=?', array($_GET['tid']));
	$r2=$db->all_query_stmt('SELECT rid,txt,add_time,reply.uid,usr From acc,reply WHERE acc.uid=reply.uid and tid=?',array($_GET['tid']));
	$send=array();
	$send['topic']=$r[0];
	if($r[0]['uid']==$_SESSION['uid']){
		$send['isown']=1;
	}else{
		$send['isown']=0;
	}
	$send['reply']=$r2;
	if(count($r)){
			foreach($send['reply'] as $k=>$v){
		if($send['reply'][$k]['uid']==$_SESSION['uid']){
			$send['reply'][$k]['isown']=1;
		}else{
		    $send['reply'][$k]['isown']=0;
		}
	}
	}
	echo json_encode($send);
}
?>
