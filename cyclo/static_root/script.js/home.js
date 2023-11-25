let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides(); // Start the slideshow

// heart button function

document.addEventListener("DOMContentLoaded", function() {
    // const heartButton = document.querySelector(".heart-button");

    // heartButton.addEventListener("click", function() {
    //     this.classList.toggle("clicked");
    // });

    const heartButtons = document.querySelectorAll('.heart_button');

    heartButtons.forEach(heartButtons => {
        heartButtons.addEventListener('click', function () {
            this.classList.toggle('clicked');

        });
    });
});


function addToFavorites() {
    // Simulate adding the item to favorites (you can replace this with your actual logic)
    // For now, let's just show a message.
    showMessage("Added to Favorites!");

    // You can add your logic to actually add the item to favorites here.
}

function showMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerText = message;
    messageDiv.style.display = "block";

    // Hide the message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}


document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.heart_button');
    const modal = document.getElementById('myModal');
    const closeButton = modal.querySelector('.close');

    function showModal() {
        modal.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            showModal();
        });
    });

    closeButton.addEventListener('click', hideModal);


    const pill_buttons = document.querySelectorAll('.pill-button');
    const cart_modal = document.getElementById('add_to_cart');
    const closecartButton = cart_modal.querySelector('.close_cart');

    function showcartModal() {
        cart_modal.style.display = 'block';
    }

    function hidecartModal() {
        cart_modal.style.display = 'none';
    }

    pill_buttons.forEach(cart => {
        cart.addEventListener('click', function () {
            showcartModal();
        });
    });

    closecartButton.addEventListener('click', hidecartModal);
});

