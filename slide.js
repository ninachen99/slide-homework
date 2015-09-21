//Array of images using css background.
$(document).ready(function(){
     var currentImg = 0;
     var allImg = $('.slides li').length;
     $('.slider ul').width(allImg*imgWidth);


     $('.pager').click(function(){
        //increase image counter
        currentImg++;
        //if we are at the end let set it to 0
        if(currentImg >= allImg) currentImg = 0;
        //calcualte and set position
        setFramePosition(currentImg);

    });

    $('.pager').click(function(){
        //decrease image counter
        currentImg--;
        //if we are at the end let set it to 0
        if(currentImg<0) currentImg = allImg-1;
        //calcualte and set position
        setFramePosition(currentImage);       
       });
               
    });

    //calculate the slideshow frame position and animate it to the new position
    function setFramePosition(pos){
                
        //calculate position
        var px = imgWidth*pos*-1;
        //set ul left position
        $('#slideShow ul').animate({
            fadeOut(1000);
        }, 500);
    }
})

/*(document).ready(function(){

  var counter = 0,
    $items = $('.slide img'),
    numItems = $items.length;
   
  var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);
    $items.removeClass('show');
    $items.eq(itemToShow).addClass('show');
  };
   
  $('.next').on('click', function() {
    counter++;
    showCurrent();
  });
   
  $('.prev').on('click', function() {
    counter--;
    showCurrent();
  });
});
/*$(document).ready(function(){

var myImage = document.getElementById("mainImg");

var imageArray = ['../img/hero2.jpg','../img/hero.jpg','../img/hero2.jpg'];

var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage,500);

})

});*/
// this is for unordered list, using .animate function 
/*$(document).ready(function(){
  $(img).each(function(intIndex){
    $(this).nextAll('pager').bind("click", function(){
    		if($(this).is(".next"))	{
    			$(this).parent('li').parent('ul').animate({
    				"margin-left": (-(intIndex + 1) * theWidth)
    					}, 1000)
    			} else if($(this).is(".previous")){
    			$(this).parent('li').parent('ul').animate({
    				"margin-left": (-(intIndex - 1) * theWidth)
    			}, 1000)
    			} else if($(this).is(".startover")){
    			$(this).parent('li').parent('ul').animate({
    				"margin-left": (0)
    			}, 1000)
    	}
    	});//close .bind()
  });//close .each() 

})



<script type="text/javascript">

var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "firstcar.gif" // set image src property to image path, preloading image in the process
slideimages[1] = new Image()
slideimages[1].src = "secondcar.gif"
slideimages[2] = new Image()
slideimages[2].src = "thirdcar.gif"

</script>
</head>
<body>
<img src="firstcar.gif" id="slide" width="100" height="56" />

<script type="text/javascript">

//variable that will increment through the images
var step=0

function slideit(){
 //if browser does not support the image object, exit.
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<2)
  step++
 else
  step=0
 //call function "slideit()" every 2.5 seconds
 setTimeout("slideit()",2500)
}

slideit()

</script>















