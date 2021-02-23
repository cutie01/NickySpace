

$( document ).ready(function() {
    console.log( "ready!" );


	


// $( ".donate-dialog'" ).css( "zIndex", "100" );
// 	$( ".donate-dialog'" ).css( "position", "absolute" );

	
// 	document.getElementsByClassName('donate-dialog')=ell;
	
//   ell.style.zIndex = "100";
	
	
	
	
	
	
// Selecting all the images.
const images = document.querySelectorAll("img");

// The API options: when 20% of the image is visible.
const imgOptions = {
  threshold: 0.2
};

// Calling the API constructor.
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    // If the image is not visible.
    if (!entry.isIntersecting) return;
    
    // If it's visible.
    const img = entry.target;
    img.src = img.src.replace("w=10&", "w=800&");
    imgObserver.unobserve(entry.target);
  });
}, imgOptions);

// Observing the images.
images.forEach((img) => {
  imgObserver.observe(img);
	document.getElementById("chatDiv").style.display = "none !important";
	
	
	
	
	
	
	
	
	var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
	
	
	
	
	
	
	document.getElementById('checked').onclick=function(){
		// Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");
		
		var nickys = document.getElementById('nickys');
		var chatys = document.getElementById('chatDiv');

  // If the checkbox is checked, display the output text
  if (checked.checked == true){
   nickys.style.display = "none";
		chatys.style.display = "block";
		//text.style.display = "block";
  } else {
   nickys.style.display = "block";
		chatys.style.display = "none";
		//text.style.display = "none";
  }
	}
	
	
	
	
	
	
	
});
	
	});

// var don = document.getElementById("outer-div");
// console.log(don);
// don.onclick = function() {
//     alert('geber');
// };

