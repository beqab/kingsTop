
	        	 	 	 	 	// piltri qlaqis mixedvit
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
 
 $('#myInput').on({

 	focus:function(){
       $('#myUL').slideDown()
 },
    blur: function(){
    	$('#myUL').slideUp()
    }
 })
 $('#myUL li a').each(function(){
 	 $(this).click(function(){

 	
 	console.log($('#myInput').val($(this).text()))
 	 })
 })
// ===========================
// piltri skolis mixedvit
function myFunction2() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput2");

    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL2");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
 
 $('#myInput2').on({

 	focus:function(){
       $('#myUL2').slideDown()
 },
    blur: function(){
    	$('#myUL2').slideUp()
    }
 })
 $('#myUL2 li a').each(function(){
 	 $(this).click(function(){

 	
 	$('#myInput2').val($(this).text())

 	 })
 })




// ======================================
// piltri skolis mixedvit
function myFunction3() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput3");

    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL3");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
 
 $('#myInput3').on({

 	focus:function(){
       $('#myUL3').slideDown()
 },
    blur: function(){
    	$('#myUL3').slideUp()
    }
 })
 $('#myUL3 li a').each(function(){
 	 $(this).click(function(){

 	
 	console.log($('#myInput3').val($(this).text()))
 	 })
 })




// ======================================


// piltri skolis mixedvit
function myFunction4() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput4");

    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL4");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
 
 $('#myInput4').on({

 	focus:function(){
       $('#myUL4').slideDown()
 },
    blur: function(){
    	$('#myUL4').slideUp()
    }
 })
 $('#myUL4 li a').each(function(){
 	 $(this).click(function(){

 	
 	console.log($('#myInput4').val($(this).text()))
 	 })
 })




// ======================================
// piltri skolis mixedvit
function myFunction5() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput5");

    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL5");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
 
 $('#myInput5').on({

 	focus:function(){
       $('#myUL5').slideDown()
 },
    blur: function(){
    	$('#myUL5').slideUp()
    }
 })
 $('#myUL5 li a').each(function(){
 	 $(this).click(function(){

 	
 	console.log($('#myInput5').val($(this).text()))
 	 })
 })




// ======================================
// piltri skolis mixedvit
function myFunction6() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput6");

    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL6");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
 
 $('#myInput6').on({

 	focus:function(){
       $('#myUL6').slideDown()
 },
    blur: function(){
    	$('#myUL6').slideUp()
    }
 })
 $('#myUL6 li a').each(function(){
 	 $(this).click(function(){

 	
 	console.log($('#myInput6').val($(this).text()))
 	 })
 })




// ======================================
 // claer form vlaue


			
			$('.formClear').each(function(index, element) {
    var $element = $(element);
    var defaultValue = $element.val();
    $element.css('background-color', '');
    $element.focus(function() {
        var actualValue = $element.val();
        if (actualValue == defaultValue) {
            $element.val('');
            $element.css('background-color', '');
        }
    });
    $element.blur(function() {
        var actualValue = $element.val();
        if (!actualValue) {
            $element.val(defaultValue);
            $element.css('background-color', '');
        }
    });

		
		

		});
