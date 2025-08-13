import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    try {
        await addDoc(collection(db, "contacts"), {
            name: name.value.trim(),
            email: email.value.trim(),
            number: number.value.trim(),
            subject: subject.value.trim(),
            message: message.value.trim(),
            timestamp: serverTimestamp()
        });

        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thanks for reaching out. I’ll get back to you soon 😊',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });

        contactForm.reset();

    } catch (error) {
        console.error("Error adding document: ", error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again!',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });

    }
});


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
};
