// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Get the modal
var modal0 = document.getElementById("myModal0");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img0 = document.getElementById("myImg0");
var modalImg0 = document.getElementById("img0");
var captionText0 = document.getElementById("caption0");
img0.onclick = function(){
  modal0.style.display = "block";
  modalImg0.src = this.src;
  captionText0.innerHTML = this.alt;
}


var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img1");
var captionText1 = document.getElementById("caption1");
img1.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
}


var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img2");
var captionText2 = document.getElementById("caption2");
img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span0.onclick = function() { 
  modal0.style.display = "none";
}
span1.onclick = function () { 
  modal1.style.display = "none";
}
span2.onclick = function () { 
  modal2.style.display = "none";
}
