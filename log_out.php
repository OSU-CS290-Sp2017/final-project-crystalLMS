<?
include './lib/mysql_contral.php';
include './lib/session_mem_classmode.php';
include './lib/class_other.php';
$sess=new session_memcache();
session_destroy();
$o=new other_func();
$o->jref("login.html");
?>