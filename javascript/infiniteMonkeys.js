$(document).ready(function() {

  var hideImg = function() {
    $("#mainImg").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();

  };

  var showOneImg = function() {
    $("#mainImg").show();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();

  };
  var showTwoImg = function() {
    $("#mainImg").show();
    $("#img2").show();
    $("#img3").hide();
    $("#img4").hide();

  };

  var showThreeImg = function() {
    $("#mainImg").show();
    $("#img2").show();
    $("#img3").show();
    $("#img4").hide();

  };
  var showFourImg = function() {
    $("#mainImg").show();
    $("#img2").show();
    $("#img3").show();
    $("#img4").show();

  };


  var showExit = function(){
    $("#exit").html("X");
    $("#exit").css("background-color", "#F5F400D9");
  }
  var hideExit = function(){
    $("#exit").css("background-color", "transparent");
    $("#exit").html("");
  }

  var modal = function(){
  // showOneImg();
  var newSrc = $("#actImg").attr('src');
  $("#img01").attr('src', newSrc);
  console.log($("#actImg").attr('src'));

  $(".modal").css("display", "block");
  }
  var closeModal = function(){

  // $("#img01").html('<img src="images/wondow.jpg" alt="Project Image" class= "mainBoxImg" >');

  $(".modal").css("display", "none");
  console.log("test");

  }


  var getTitle = function(){
    var title = $(project1).text();
  };

  var setProject1 = function($blah) {
    showOneImg();
    showExit();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#mainImg").html('<img src="images/render.png" alt="Project Image" class= "mainBoxImg" id ="actImg" >');
  };

  var setProject2 = function($blah) {
    showOneImg();
    showExit();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#mainImg").html('<img src="images/wondow.jpg" alt="Project Image" class= "mainBoxImg"  id ="actImg">');
  };



    var setProject3 = function($blah) {
      showTwoImg();
      showExit();

      $("#title").html($blah);
      $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

      $("#mainImg").html('<img src="images/shellGif.gif" alt="Project Image" class= "mainBoxImg"   id ="actImg">');
      $("#img2").html('<img src="images/shell2.jpg" alt="Project Image" class= "mainBoxImg" >');
    };

  var setProject4 = function($blah) {
    showOneImg();
    showExit();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#mainImg").html('<img src="images/addda.png" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
  };

  var setProject5 = function($blah) {
    showOneImg();
    showExit();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#mainImg").html('<img src="images/timeLines.png" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
  };

  var setProject6 = function($blah) {
    showFourImg();
    showExit();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#img2").html('<img src="images/dimiShaders/dimiShaderTransform.png" alt="Project Image" class= "mainBoxImg" >');
    $("#mainImg").html('<img src="images/dimiShaders/dimiShaderWater.png" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
    $("#img3").html('<img src="images/dimiShaders/spiral.jpg" alt="Project Image" class= "mainBoxImg"   id = "actImg">');

  };

  var setTitle = function($blah) {

    showExit();


    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#mainImg").html('<img src="images/shell2.jpg" alt="Project Image" class= "mainBoxImg"  id = "actImg" >');
  };


  var showHome = function() {


    $("#title").html("INFINTE MONKEYS");
    $("#bio").html(" Infinite Monkeys is Vytautas Niedvaras, Dimitris Kyriakoudis and Edmund Oetgen. Their works are an exploration  of technology's influence over social, temporal and spatial interactions  ");

    hideImg();
    hideExit();



       // $("#img2").hide();
  };

      $('#exit').click(function(){ showHome(); return false; });
      $('#project1').click(function(){ setProject1("FRACTURES"); return false; });
      $('#project2').click(function(){ setProject2("ADDDA"); return false; });
      $('#project3').click(function(){ setProject3("SHELLS"); return false; });
      $('#project4').click(function(){ setProject4("WELCOME, #"); return false; });
      $('#project5').click(function(){ setProject5("TIMELINES"); return false; });
      $('#project6').click(function(){ setProject6("SHADER"); return false; });
      $('#project7').click(function(){ setProject6("D.W.A.I.N."); return false; });
      $('#mainImg').click(function(){  modal(); return false; });
       $('#close').click(function(){ closeModal(); return false; });

 showHome();
});
