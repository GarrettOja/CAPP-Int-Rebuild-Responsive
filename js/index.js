$(function() {
  $('.home-info').matchHeight();
});



//Javascript for Previous Galleries

/* generateGallery(a, b, c, d, e, f, g, h, j)
    a) imgList array name
    b) filepath for large images
    c) total number of large images
    d) row letter for unique row Ids (any letter as a string)
    e) img letter for unique image IDs (any letter as a string)
    f) filepath for thumbnails
    g) gallery ID ex. "gallery1"
    h) "total number of images" / 4 for end of createRow() loop
    j) extra images to remove from last row (write as string) ex. "'#'+img letter+'254', '#'+img letter+'255'"
*/

/* Generate Img Array */
/*
  var lots = [];
  var file = "Gallery/Auction/LrgLot/";
  for (var num = 0; num < 61; num++) {             Change limit based off number of img files -
    lots.push(file+num+'.jpg');
};

var imgs = [];
var file = "Gallery/Auction/Lrg/";
for (var num = 0; num < 353; num++) {             Change limit based off number of img files -
  imgs.push(file+num+'.jpg');
};  */

function generateGallery(a, b, c, d, e, f, g, h, j) {
  var row, newRow, i, iC = 0 /* Img Count */, img;
  /* Create array of images files */
  /*  a = [];

    var file = b;
    for (var num = 0; num < c; num++) {        */           /* Change limit based off number of img files -*/
  /*    a.push(file+num+'.jpg');
    };*/

  /* Create gallery rows with images */

  /* Function to create new row elements */
    function createRow(i) {
      newRow = "<div id="+d+i+" class='row'></div>";
      row = newRow;
    };

  /* Function to create new img elements */       /* Use ' ' to contain HTML code */
    function newImg() {
      var displayId = "'" + e + iC + "'";
      img = '<div class="col-xs-3 marginTop"><img id="'+e+iC+'" class="'+a+' img-responsive" onclick="display('+displayId+')" data-toggle="modal" data-target="#viewport" src="'+f+iC+'.jpg"></div>';
      $("#"+d+i).append(img);
      iC++;
    };

  /* Loop to create 4 img elements per row */
    function imgLoop() { /* loopC == loopCount*/
      for (var loopC = 0; loopC < 4; loopC++) {
        newImg();
      };
    };


  /* Put it all together */
      for (i = 0; i < h; i++) {    /* Divide total number of images by 4 for end of loop number */
        createRow(i);
        $(g).append(row);
        imgLoop();
      };
      $(j).remove();
};

function generate() {
  generateGallery("", "", "", "cRow", "cImg", "images/galleries/march2017/ThumbsAutoRing/Cars/thumbs", "#dGallery0", 102, "#cImg405, #cImg406, #cImg407");
  generateGallery("", "", "", "pRow",  "pImg", "images/galleries/march2017/ThumbsAutoRing/Parts/thumbs", "#dGallery1", 106, "#pImg423");
  generateGallery("", "", "", "sRow", "sImg", "images/galleries/march2017/ThumbsShopRing/thumbs", "#dGallery2", 40, "");
  };
function generate2() {
  generateGallery("", "", "", "cRow", "cImg", "images/galleries/august2017v3/Thumbs/thumbs", "#gallery0", 44, "#cImg175");
};

function display(x) {
  /*document.getElementById("wImg").className = document.getElementById(x).className;*/
  var old = document.getElementById(x).src;
  var filepath = old.replace('Thumbs', 'Lrg');
  filepath = filepath.replace('thumbs', '');
  document.getElementById('wImg').src = filepath;
};

$("#togglePrevGallery").click(function(){
  $("#togglePrevGallery").hide();
  generate();
  $("#prevGallery").show();
});
$("#dB0").click(function(){
  $("#dGallery0").show();
  $("#dGallery1").hide();
  $("#dGallery2").hide();
});
$("#dB1").click(function(){
  $("#dGallery0").hide();
  $("#dGallery1").show();
  $("#dGallery2").hide();
});
$("#dB2").click(function(){
  $("#dGallery0").hide();
  $("#dGallery1").hide();
  $("#dGallery2").show();
});
