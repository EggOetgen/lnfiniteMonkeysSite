$(document).ready(function() {

  var hideImg = function() {
    $("#mainImg").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  };
  var showImgVar = function($num) {

    if($num==5){
    $("#mainImg").show();
    $("#img2").show();
    $("#img3").show();
    $("#img4").show();
    $("#img5").show();
    $("#img6").hide();
  }  else if($num==6){
    $("#mainImg").show();
    $("#img2").show();
    $("#img3").show();
    $("#img4").show();
    $("#img5").show();
    $("#img6").show();
  }


  };
  var showOneImg = function() {
    $("#mainImg").show();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();

  };
  var showTwoImg = function() {
    $("#mainImg").show();
    $("#img2").show();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();

  };

  var showThreeImg = function() {
    $("#mainImg").show();
    $("#img2").show();
    $("#img3").show();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();

  };
  var showFourImg = function() {
    $("#mainImg").show();
    $("#img2").show();
    $("#img3").show();
    $("#img4").show();
    $("#img5").hide();
    $("#img6").hide();

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
    $("#bio").html("Experimental software developed to explore emergent properties of branching systems. Visually complex and diverse structural bodies were generated using the same set of rules, small changes to the input dataset would often create dramatic changes, shifting between seemingly organic and industrial. <br><br> ");
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
    $("#bio").html("Allowing computational agent to directly access my human body hardware.<br> ADDA is a multimodal performance that uses embodied technologies and muscle stimulation hardware. A pair of sensory gloves track the movement of a performer's hands along with the relative position of their fingers, using machine learning techniques this data can the be used to detect different types of motion and gestures expressed. When used in conjunction, the performer is able to control the sound output. Muscle stimulation hardware, controlled by a computational agent is able to override performers intent, exposing tension between human and artificial performers.<br> <br>");


    $("#bioLink1").attr('href', 'https://www.youtube.com/watch?time_continue=265&v=gJbEyfUsk0o');
    $("#bioLink1").html('VIDEO');

    $("#mainImg").html('<img src="images/addaGlove.jpg" alt="Project Image" class= "mainBoxImg"  id ="actImg">');
  };



    var setProject3 = function($blah) {
      showFourImg();
      showExit();
        hideLinks();

      $("#title").html($blah);
      $("#bio").html("An exploration of parametric design, user interaction and machine learning. <br> <br> A seashell is graphically generated in real time, it's shape dictated by a mathematical formula. Facial recognition software passes information into a neural network which in turn send data into the formula, allowing the user to control the form of the shell by changing their expression. These shells can then be exported given physical form using a 3D printer <br> <br>");

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
    $("#bio").html("Public installation for W+K London. \"Welcome, #\". Six laptops on display, showing a single number.  <br><br> ");


    $("#mainImg").html('<img src="images/wondow.jpg" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
  };

  var setProject5 = function($blah) {
    showOneImg();
    showExit();
      showLinks(2);

    $("#title").html($blah);
    $("#bio").html("TimeLines is a free and open-source instrument and programming language. It is used for composing and performing music, on stage in front of an audience, in a practice known as live coding. It provides a simple, yet elegant and versatile, framework for expressing musical ideas by combining the disciplines of computer programming and mathematics. <br> <br> TimeLines conceives of music as a function of time. In other words, it represents a whole piece of music as the result of letting time flow through a series of mathematical equations. By manipulating and adding to those equations in real time, one can alter the flow of time, using it to drive the music forward.<br> <br>TimeLines is in active development and has been used to perform live in festivals and conferences.<br><br> ");

    $("#mainImg").html('<img src="images/timelinesLive.jpg" alt="Project Image" class= "mainBoxImg"   id = "actImg">');


        $("#bioLink1").attr('href', 'https://github.com/lnfiniteMonkeys/TimeLines');
        $("#bioLink1").html('GITHUB');

        $("#bioLink2").attr('href', 'https://www.youtube.com/channel/UCqypIKZibRqhOz8QPFgwg1Q');
        $("#bioLink2").html('YOUTUBE');

  };

  var setProject6 = function($blah) {
    showImgVar(6);
    showExit();
      showLinks(1);

    $("#title").html($blah);
    $("#bio").html("A hand-picked selection of procedurally-generated audiovisual experiments. <br><br><h3> Pol&yacute;morphes</h3> <br><br><p class ='bio'>An attempt at digital sculpting using machine learning and a piece of paper. </p>");

    $("#bioLink1").attr('href', 'https://infinitemonkeyssite.wordpress.com/2018/01/08/polymorphes/');
    $("#bioLink1").html('MORE INFORMATION');

    $("#mainImg").html(' <img src="images/dimiShaders/dimiShaderTransform.png" alt="Project Image" class= "mainBoxImg"  id ="actImg">');
    // $("#img3Text").html("thisis some text");

    $("#img4").html('<br><h3> Domain: Warped</h3><br><br><p class ="bio" <p>Three studies in real-time domain warping.</p> <img src="images/dimiShaders/dimiShaderWater.png" alt="Project Image" class= "mainBoxImg"   id = "actImg4">');
    $("#img5").html(' <img src="images/dimiShaders/pinWater.png" alt="Project Image" class= "mainBoxImg"   id = "actImg5">');
    $("#img6").html(' <img src="images/dimiShaders/sphereWater.png" alt="Project Image" class= "mainBoxImg"   id = "actImg6">');


    $("#img2").html('<img src="images/dimiShaders/dimGif.gif" alt="Project Image" class= "mainBoxImg"   id = "actImg2">');
    $("#img3").html('<br><h3> Dancing Slime</h3><br><br><p class ="bio" <p>Using ray marching techniques to create a pair of geltanous dancers in real time</p> <img src="images/blobGif.gif" alt="Project Image" class= "mainBoxImg"   id = "actImg3"> ');


  };

  var setProject7 = function($blah) {
    showOneImg();
    showExit();
    showLinks(2);

    $("#title").html($blah);
    $("#bio").html("An intelligent drum machine. Machine learning techniques used to create create arbitrary mappings between knobs and various synthesis parameters. A performer can then use these knobs to explore the sound space in real time, allowing for more expressive interactions than those offered by traditional electronic instruments<br><br> ");

    $("#bioLink1").attr('href', 'https://soundcloud.com/oetgen/gabber-jam?in=oetgen/sets/dwain-demos');
    $("#bioLink1").html('AUDIO');

    $("#bioLink2").attr('href', 'https://www.instagram.com/p/Bj_6O4OgqRW/?utm_source=ig_web_copy_link');
    $("#bioLink2").html('VIDEO');

    $("#mainImg").html('<img src="images/dwain2.jpg" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
  };

  var setProject8 = function($blah) {
    showOneImg();
    showExit();
    showLinks(1);

    $("#title").html($blah);
    $("#bio").html("Experiments in teaching autonomous swarms to be creative. Used for drawing graphics and for a multi-channel sound installation.<br><br> ");

    $("#bioLink1").attr('href', 'https://infinitemonkeyssite.wordpress.com/2017/11/30/multiple-agents-swarm-creativity/');
    $("#bioLink1").html('MORE INFORMATION');

    $("#mainImg").html('<img src="images/spiral2.png" alt="Project Image" class= "mainBoxImg"   id = "actImg">');
  };

  var setTitle = function($blah) {

    showExit();


    $("#title").html($blah);
    $("#bio").html("This is some example text about  " + $blah + "! <br> <br> Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. ");

    $("#mainImg").html('<img src="images/shell2.jpg" alt="Project Image" class= "mainBoxImg"  id = "actImg" >');
  };


  var showHome = function() {


    $("#title").html("INFINTE MONKEYS");
    $("#bio").html(" Three of the Infinite Monkeys are Vytautas Niedvaras, Dimitris Kyriakoudis, and Edmund Oetgen. We have evolved to generate and play with numbers, a practice also known as computational arts. Our paths have crossed with visual and sound art, generative music, new performance interfaces, interactive installations, textiles, and others. Our work is an exploration of technology and its influence over social, temporal, and spatial boundaries and experiences.  <br><br> Shown here a sample of some of our favourite work and selected experiments   <br><br> Contact us at   <a href = 'mailto:lnfinitemonkeys@tuta.io' id = 'email'> lnfinitemonkeys@tuta.io</a>");

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
      $('#project8').click(function(){ setProject8("multipleAgents: SWARM CREATIVITY"); return false; });
      $('#mainImg').click(function(){  modal("#actImg"); return false; });
      $('#img2').click(function(){     modal("#actImg2"); return false; });
      $('#img3').click(function(){  modal("#actImg3"); return false; });
      $('#img4').click(function(){  modal("#actImg4"); return false; });

      $('#close').click(function(){ closeModal(); return false; });

 showHome();
});
