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

  var modal = function($imgId){
  // showOneImg();
  var newSrc = $($imgId).attr('src');
  $("#img01").attr('src', newSrc);
  console.log(newSrc, $imgId) ;

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
    showFourImg();
    showExit();
    hideLinks();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");
  // console.log(  $("#mainImg ").children('img').html() );
    $("#mainImg").html('<img src="images/render.png" alt="Project Image" class= "mainBoxImg" id ="actImg" >');
    $("#img2").html('<img src="images/rend2.png" alt="Project Image" class= "mainBoxImg"  id ="actImg2">');
    $("#img3").html('<img src="images/rend3.png" alt="Project Image" class= "mainBoxImg"  id ="actImg3">');
    $("#img4").html('<img src="images/rend4.png" alt="Project Image" class= "mainBoxImg"  id ="actImg4">');

  };

  var setProject2 = function($blah) {
    showOneImg();
    showExit();
    showLinks(1);

    $("#title").html($blah);
    $("#bio").html("ADDA is a musical performance that uses embodied technologies and muscle stimulation hardware. A pair of sensory gloves track the movement of a performer\'s hands along with the relative position of their fingers,  this data can the be used to detect different types of motion and gestures expressed. When used in conjunction, the performer is able to control the sound output. There is also a TENS muscle stimulator which will override the control of the performer when current is imposed. <br> <br>");


    $("#bioLink1").attr('href', 'https://www.youtube.com/watch?time_continue=265&v=gJbEyfUsk0o');
    $("#bioLink1").html('VIDEO');

    $("#mainImg").html('<img src="images/addaGlove.jpg" alt="Project Image" class= "mainBoxImg"  id ="actImg">');
  };



    var setProject3 = function($blah) {
      showFourImg();
      showExit();
        hideLinks();

      $("#title").html($blah);
      $("#bio").html("An exploration of paratmetric design, user interaction and machine learning. <br> <br> A seashell is graphically generated in real time, it's shape dictated by a mathematical formula. Facial recognition software passes information into a neural network which in turn send data into the formula, allowing the user to control the form of the shell by changing their expression. These shells can then be exported given physical form using a 3D printer <br> <br>");

      $("#mainImg").html('<img src="images/shellGif.gif" alt="Project Image" class= "mainBoxImg"   id ="actImg">');
      $("#img2").html('<img src="images/shell2.jpg" alt="Project Image" class= "mainBoxImg"  id ="actImg2">');
      $("#img3").html('<img src="images/shell1.jpg" alt="Project Image" class= "mainBoxImg"  id ="actImg3">');
      $("#img4").html('<img src="images/shell4.jpg" alt="Project Image" class= "mainBoxImg"  id ="actImg4">');
    };

  var setProject4 = function($blah) {
    showOneImg();
    showExit();
    hideLinks();

    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");


    $("#mainImg").html('<img src="images/wondow.jpg" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
  };

  var setProject5 = function($blah) {
    showOneImg();
    showExit();
      showLinks(2);

    $("#title").html($blah);
    $("#bio").html("TimeLines is an extremely powerful, versatile, and customizable modular synth and sequencer in the form of a live coding language. <br> <br>It is based on the idea that music is a function of time. This simply means that, ultimately, music is what emerges as time flows forwards, bringing about all changes in sound that we perceive as melodies, rhythms, chord progressions etc. In other words, if a painting is experienced by looking along the space of a canvas, then a piece of music is experienced by listening to it through time, from its beginning till the end. TimeLines builds on that concept by forming all musical structure as functions of explicit time.<br> <br> ");

    $("#mainImg").html('<img src="images/timeLines.png" alt="Project Image" class= "mainBoxImg"   id = "actImg">');


        $("#bioLink1").attr('href', 'https://github.com/lnfiniteMonkeys/TimeLines');
        $("#bioLink1").html('GITHUB');

        $("#bioLink2").attr('href', 'https://www.youtube.com/channel/UCqypIKZibRqhOz8QPFgwg1Q');
        $("#bioLink2").html('YOUTUBE');

  };

  var setProject6 = function($blah) {
    showFourImg();
    showExit();
      hideLinks();

    $("#title").html($blah);
    $("#bio").html("A selection of experiments on proceduraly generated visuals <br><br> ");

    $("#mainImg").html('<img src="images/dimiShaders/dimiShaderTransform.png" alt="Project Image" class= "mainBoxImg"  id ="actImg">');
    // $("#img3Text").html("thisis some text");

    $("#img3").html('<img src="images/dimiShaders/dimiShaderWater.png" alt="Project Image" class= "mainBoxImg"   id = "actImg3">');
    $("#img4").html('<img src="images/dimiShaders/spiral.jpg" alt="Project Image" class= "mainBoxImg"   id = "actImg4">');
    $("#img2").html('<br> <p>Using ray marching techniques to generate evolving graphics in real time</p> <img src="images/blobGif.gif" alt="Project Image" class= "mainBoxImg"   id = "actImg2"> ');


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
    $("#bio").html(" Infinite Monkeys is Vytautas Niedvaras, Dimitris Kyriakoudis and Edmund Oetgen. Their works are an exploration  of technology's influence over social, temporal and spatial interactions  <br><br> Shown here a sample of some of our favourite work and selected experiments   <br><br> Contact us at   <a href = 'mailto:lnfinitemonkeys@tuta.io' id = 'email'> lnfinitemonkeys@tuta.io</a>");

    hideImg();
    hideLinks();
    hideExit();



       // $("#img2").hide();
  };

      $('#exit').click(function(){ showHome(); return false; });
      $('#project1').click(function(){ setProject1("FRACTURES"); return false; });
      $('#project2').click(function(){ setProject2("ADDA"); return false; });
      $('#project3').click(function(){ setProject3("SHELLS"); return false; });
      $('#project4').click(function(){ setProject4("WELCOME, #"); return false; });
      $('#project5').click(function(){ setProject5("TIMELINES"); return false; });
      $('#project6').click(function(){ setProject6("AUDIOVISUAL EXPERIMENTS"); return false; });
      $('#project7').click(function(){ setProject7("D.W.A.I.N."); return false; });
      $('#mainImg').click(function(){  modal("#actImg"); return false; });
      $('#img2').click(function(){     modal("#actImg2"); return false; });
      $('#img3').click(function(){  modal("#actImg3"); return false; });
      $('#img4').click(function(){  modal("#actImg4"); return false; });

      $('#close').click(function(){ closeModal(); return false; });

 showHome();
});
