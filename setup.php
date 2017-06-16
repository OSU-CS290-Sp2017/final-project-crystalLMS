<?php
include './lib/mysql_contral.php';
include './lib/session_mem_classmode.php';
$db=new db_contral();
$db->connect_db();
$usr='root';
$pwd='root';
$salt='acWcbii';
$pwd=md5($pwd.$salt);
  $db->ins_data('acc', array('usr','pwd','salt','avatar','is_admin','lastip'), array('student','studentdadsadsadsadsadasdasdsadasd','salt','avatar',0,'127.0.0.1'));
echo "ROOT SUCC";
?>