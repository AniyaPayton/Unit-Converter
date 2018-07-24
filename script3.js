$(document).ready(function() {  

$("button").click( function() {
	var a = $("#cups").val();
	var b = 8;
	var c = a*b;
	console.log(c);
	$("#result").text(c);
	});
});


