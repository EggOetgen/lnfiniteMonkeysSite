$(document).ready(function() {

  var MyBlah = function($blah) {

     $("#bio").html("This is some example text about project number one! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    };

  var getTitle = function(){
    var title = $(project1).text();
  };

  var setTitle = function($blah) {

    $("#exit").css("color", "#08090A");

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

   $("#exit").html("X");

  $("#mainImg").html('<img src="images/shell2.JPG" alt="HTML5 Icon" class= "mainBoxImg" >');
  };

  var showHome = function() {
    // var newTitle =
    $("#title").html("Infinite Monkeys");
    $("#bio").html(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse aliquet arcu a ipsum. Nunc arcu est, pulvinar vitae, consectetuer ac, pellentesque interdum, augue. Fusce iaculis nulla et sapien. Aliquam erat volutpat. Etiam iaculis turpis nec libero. Nam adipiscing ullamcorper quam. ");
    // $("#exit").css("color", "#F4F7F5");
    $("#mainImg").html('<img src="images/us.png" alt="HTML5 Icon" class= "mainBoxImg" >');
     $("#exit").html("-");
  };

      $('#exit').click(function(){ showHome(); return false; });
      $('#project1').click(function(){ setTitle("Project One"); return false; });
      $('#project2').click(function(){ setTitle("Project Two"); return false; });
      $('#project3').click(function(){ setTitle("Project Three"); return false; });
      $('#project4').click(function(){ setTitle("Project Four"); return false; });
      $('#project5').click(function(){ setTitle("Project Five"); return false; });
      $('#project6').click(function(){ setTitle("Project Six"); return false; });
});
//document.getElementById("bio").innerHTML = "Hello, World!";
