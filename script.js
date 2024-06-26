// Get the modal
var modal = document.getElementById('imageModal');

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");

// Get all images with the class "clickable-image"
var images = document.getElementsByClassName('clickable-image');

// Loop through all images and add the click event listener
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







