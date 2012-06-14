/* Fancy box code */

$(document).ready(function() {

    /* This is basic - uses default settings */
    
    $("a#lineamiento").fancybox({
	'autoScale' : false
    });
    
    $("a#single_image").fancybox();

    /* Using custom settings */
    
    $("a#inline").fancybox({
	'hideOnContentClick': true
    });

    /* Apply fancybox to multiple items */
    $("a.grouped_elements").fancybox({
	'transitionIn':'elastic',
	'transitionOut':'elastic',
	'speedIn':600, 
	'speedOut':200, 
	'overlayShow':false
    });
    
});

$(function() {
    $( "#accordion" ).accordion({
	collapsible: true,
	active: false,
        fillspace: true,
        autoheight: false,
        navigation: true,
        clearStyle: true,
    });
});

$(function(){
     $('.llinea').click(function() {
	 console.log("click");
	 $( "#accordion" ).accordion({
	collapsible: true,
	active: true,
        fillspace: true,
        autoheight: false,
        navigation: true,
        clearStyle: true,
	 });
     });
 });
