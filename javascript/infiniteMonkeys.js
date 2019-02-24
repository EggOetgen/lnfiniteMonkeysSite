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
  var showLinks = function($test){

    if($test == 1){
      $("#bioLink1").show();
      $("#bioLink2").hide();
    }else if($test ==2){
        $("#bioLink1").show();
        $("#bioLink2").show();
    }

  }

  var hideLinks = function(){


        $("#bioLink1").hide();
        $("#bioLink2").hide();


  }


  var showExit = function(){
    // hideLinks(123);
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
    hideLinks();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");
  // console.log(  $("#mainImg ").children('img').html() );
    $("#mainImg").html('<img src="images/render.png" alt="Project Image" class= "mainBoxImg" id ="actImg" >');
  };

  var setProject2 = function($blah) {
    showOneImg();
    showExit();
      hideLinks();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#mainImg").html('<img src="images/wondow.jpg" alt="Project Image" class= "mainBoxImg"  id ="actImg">');
  };



    var setProject3 = function($blah) {
      showTwoImg();
      showExit();
        hideLinks();

      $("#title").html($blah);
      $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

      $("#mainImg").html('<img src="images/shellGif.gif" alt="Project Image" class= "mainBoxImg"   id ="actImg">');
      $("#img2").html('<img src="images/shell2.jpg" alt="Project Image" class= "mainBoxImg" >');
    };

  var setProject4 = function($blah) {
    showOneImg();
    showExit();
      hideLinks();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#mainImg").html('<img src="images/addda.png" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
  };

  var setProject5 = function($blah) {
    showOneImg();
    showExit();
      hideLinks();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#mainImg").html('<img src="images/timeLines.png" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
  };

  var setProject6 = function($blah) {
    showFourImg();
    showExit();
      hideLinks();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#img3").html('<img src="images/dimiShaders/dimiShaderTransform.png" alt="Project Image" class= "mainBoxImg" > <p>"thisis some text"</p>');
    // $("#img3Text").html("thisis some text");

    $("#mainImg").html('<img src="images/dimiShaders/dimiShaderWater.png" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
    $("#img4").html('<img src="images/dimiShaders/spiral.jpg" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
    $("#img2").html('<br> <p>Using ray marching techniques to generate evolving graphics in real time</p> <img src="images/blobGif.gif" alt="Project Image" class= "mainBoxImg"   id = "actImg"> ');

  };

  var setProject7 = function($blah) {
    showOneImg();
    showExit();
    showLinks(2);

    $("#title").html($blah);
    $("#bio").html("An inteligent drum machine. Machine learning techniques used to create create arbitrary mappings between knobs and various synthesis parameters. A performer can then use these knobs to explore the sound space in real time, allowing for more expressive interactions than those offered by traditional electronic instruments ");

    $("#bioLink1").attr('href', 'https://soundcloud.com/oetgen/gabber-jam?in=oetgen/sets/dwain-demos');
    $("#bioLink1").html('AUDIO');

    $("#bioLink2").attr('href', 'https://www.instagram.com/p/Bj_6O4OgqRW/?utm_source=ig_web_copy_link');
    $("#bioLink2").html('VIDEO');

    $("#mainImg").html('<img src="images/dwain2.jpg" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
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
      $('#project6').click(function(){ setProject6("AUDIOVISUAL EXPERIMENTS"); return false; });
      $('#project7').click(function(){ setProject7("D.W.A.I.N."); return false; });
      $('#mainImg').click(function(){  modal(); return false; });
      $('#close').click(function(){ closeModal(); return false; });

 showHome();
});
