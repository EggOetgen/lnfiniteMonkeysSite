$(document).ready(function() {


  document.getElementById("bio").innerHTML = "Hello, World!";
  //
  // // // Get the modal
  // // var modal = document.getElementById('myModal');
  //
  // // Get the image and insert it inside the modal - use its "alt" text as a caption
  //
  // var modalImg = document.getElementById("img01");
  // var img = document.getElementById("mainImg");
  // var captionText = document.getElementById("caption");
  //
  // img.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.src;
  //   captionText.innerHTML = this.alt;
  // }
  //
  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];
  //
  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

var modal = function(){

$("#img01").html($("#mainImg").html());

$(".modal").css("display", "block");
console.log("test");

}
var closeModal = function(){

// $("#img01").html('<img src="images/wondow.jpg" alt="Project Image" class= "mainBoxImg" >');

$(".modal").css("display", "none");
console.log("test");

}

  var MyBlah = function($blah) {

     $("#bio").html("This is some example text about project number one! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    };

  var getTitle = function(){
    var title = $(project1).text();
  };

  var setProject1 = function($blah) {
showOneImg();
// $(".modal").css("display", "block");
    $("#exit").css("color", "#08090A");

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

   $("#exit").html("X");

  $("#mainImg").html('<img src="images/render.png" alt="Project Image" class= "mainBoxImg" >');
  };

  var setProject2 = function($blah) {
showOneImg();
    $("#exit").css("color", "#08090A");

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

   $("#exit").html("X");

  $("#mainImg").html('<img src="images/wondow.jpg" alt="Project Image" class= "mainBoxImg" >');
  };

  var setProject3 = function($blah) {
showOneImg();
    $("#exit").css("color", "#08090A");

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

   $("#exit").html("X");

  $("#mainImg").html('<img src="images/addda.png" alt="Project Image" class= "mainBoxImg" >');
  };

  var setProject4 = function($blah) {
    showImg();
    // $("img2").css("display", "block");
    $("#exit").css("color", "#08090A");

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

   $("#exit").html("X");

  $("#mainImg").html('<img src="images/shellGif.gif" alt="Project Image" class= "mainBoxImg" >');
  $("#img2").html('<img src="images/shell2.jpg" alt="Project Image" class= "mainBoxImg" >');

  };

  var setTitle = function($blah) {

    $("#exit").css("color", "#08090A");

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

   $("#exit").html("X");

  $("#mainImg").html('<img src="images/shell2.jpg" alt="Project Image" class= "mainBoxImg" >');
  };

var hideImg = function() {
  $("#mainImg").hide();
  $("#img2").hide();

};

var showImg = function() {
  $("#mainImg").show();
  $("#img2").show();

};

var showOneImg = function() {
  $("#mainImg").show();
  $("#img2").hide();

};
  var showHome = function() {
    // var newTitle =
    $("img2").css("display", "none");
    $("#title").html("Infinite Monkeys");
    $("#bio").html(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse aliquet arcu a ipsum. Nunc arcu est, pulvinar vitae, consectetuer ac, pellentesque interdum, augue. Fusce iaculis nulla et sapien. Aliquam erat volutpat. Etiam iaculis turpis nec libero. Nam adipiscing ullamcorper quam. ");
    // $("#exit").css("color", "#F4F7F5");
    hideImg();
     $("#exit").html("-");

       // $("#img2").hide();
  };

      $('#exit').click(function(){ showHome(); return false; });
      $('#project1').click(function(){ setProject1("Project One"); return false; });
      $('#project2').click(function(){ setProject2("Project Two"); return false; });
      $('#project3').click(function(){ setProject3("Project Three"); return false; });
      $('#project4').click(function(){ setProject4("Project Four"); return false; });
      $('#project5').click(function(){ setTitle("Project Five"); return false; });
      $('#project6').click(function(){ setTitle("Project Six"); return false; });
      $('#mainImg').click(function(){  modal(); return false; });
       $('.close').click(function(){ closeModal(); return false; });
});
