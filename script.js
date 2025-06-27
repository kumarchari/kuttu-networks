// ----- Mobile Menu Toggle (Optional - if using hamburger icon) -----
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ----- Smooth Scroll to Top Button (Optional) -----
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'scrollTop';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.background = '#0074D9';
scrollBtn.style.color = '#fff';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.display = 'none';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.zIndex = '999';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ----- Contact Form Validation (Optional Future Use) -----
// const form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   if (!name || !email) {
//     alert("Please fill out all required fields.");
//     e.preventDefault();
//   }
// });

