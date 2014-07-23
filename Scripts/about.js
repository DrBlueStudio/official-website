// JavaScript Document

//turn on current location sign
var pathname = window.location.pathname;
$('a[href='+pathname+']').parent().addClass("menu-arrow");

//turn on level one button
var firstdashlocation = pathname.indexOf("-");
var levelone = pathname.substring(1,firstdashlocation);
$('div[id='+levelone+']').removeAttr("display").addClass("on");

//set link of level one button
var levelonedir = $('a[href='+pathname+']').parent().next().children().attr('href');
$('div[id='+levelone+']').children().attr('href',levelonedir);

