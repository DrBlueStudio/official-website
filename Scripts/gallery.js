// JavaScript Document

//turn on current location sign
var pathname = window.location.pathname;
$('a[href='+pathname+']').next().removeAttr("display").addClass("on");

//turn on level one button
var firstdashlocation = pathname.indexOf("-");
var levelone = pathname.substring(1,firstdashlocation);
$('div[id='+levelone+']').removeAttr("display").addClass("on");

//turn on level two button
var seconddashlocation = pathname.indexOf("-",firstdashlocation+1);
var leveltwo = pathname.substring(1,seconddashlocation);
$('div[id='+leveltwo+']').removeAttr("display").addClass("on");

//set link of level one button
var levelonedir = $('div[id='+leveltwo+']').parent().next().children().attr('href');
$('div[id='+levelone+']').children().attr('href',levelonedir);

//set links of other level one buttons
var currentitem = $("#gallery_type").attr('name');
$("#service").prev().attr('href','service-'+currentitem+'-.htm');
$("#price").prev().attr('href','price-'+currentitem+'-.htm');
$("#process").prev().attr('href','process-'+currentitem+'-.htm');