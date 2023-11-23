'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);


document.addEventListener('DOMContentLoaded', function () {
  const openFormBtn = document.getElementById('openFormBtn');
  const closeFormBtn = document.getElementById('closeFormBtn');
  const submitBtn = document.getElementById('submitBtn');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  const bookingForm = document.getElementById('bookingForm');
  const successMessage = document.getElementById('successMessage');
  const bookingRefSpan = document.getElementById('bookingRef');

  openFormBtn.addEventListener('click', function () {
    bookingForm.style.display = 'block';
  });

  closeFormBtn.addEventListener('click', function () {
    bookingForm.style.display = 'none';
  });

  submitBtn.addEventListener('click', function () {
    const studentId = document.getElementsByName('studentId')[0].value;
    const email = document.getElementsByName('email')[0].value;

    // Simulate generating a booking reference (you may implement your logic here)
    const bookingRef = generateBookingReference();

    // Display success message with booking reference
    bookingForm.style.display = 'none';
    successMessage.style.display = 'block';
    bookingRefSpan.textContent = bookingRef;
  });

  closeSuccessBtn.addEventListener('click', function () {
    successMessage.style.display = 'none';
  });

  function generateBookingReference() { 
    const timestamp = new Date().getTime();
    return `BOOK-${timestamp}`;
  }
});
