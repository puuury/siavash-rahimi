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








document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Close navbar on Esc key press
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            navbar.classList.remove('active');
        }
    });

    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });

    const rows = document.querySelectorAll('.row img');

    rows.forEach(function(row) {
        row.addEventListener('click', function() {
            showModal(this.src);
        });
    });

    function showModal(src) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const close = document.querySelector('.close');

        modalImage.src = src;
        modal.style.display = 'block';

        close.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Close modal on Esc key press
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }
});


