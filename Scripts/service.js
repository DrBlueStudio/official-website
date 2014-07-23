// JavaScript Document

//turn on current location sign
var pathname = window.location.pathname;
$('a[href='+pathname+']').parent().next().addClass("menu-arrow");

//turn on level one button
var firstdashlocation = pathname.indexOf("-");
var levelone = pathname.substring(1,firstdashlocation);
$('div[id='+levelone+']').removeAttr("display").addClass("on");

//turn on level two button
var seconddashlocation = pathname.indexOf("-",firstdashlocation+1);
var leveltwo = pathname.substring(1,seconddashlocation);
$('div[id='+leveltwo+']').addClass("on");

//set link of level one button
var levelonedir = $('div[id='+leveltwo+']').parent().next().children().attr('href');
$('div[id='+levelone+']').children().attr('href',levelonedir);

//set links of other level one buttons
var currentitem = leveltwo.substring(firstdashlocation,seconddashlocation);
if (currentitem != 'medical_content_lab') {
$("#price").prev().attr('href','price-'+currentitem+'-.htm');
$("#process").prev().attr('href','process-'+currentitem+'-.htm');
}

//set links of gallery button
var sampleurls = {'medical_illustration':'gallery-head_neck-facial_lesion_flap_repair.htm','medical_animation':'gallery-head_neck-plastic_surgery_procedures.htm','medical_graphic':'gallery-design-cgmh_poster.htm','medical_content_lab':'gallery-head_neck-facial_lesion_flap_repair.htm'};
$("#gallery").prev().attr('href',sampleurls[currentitem]);
