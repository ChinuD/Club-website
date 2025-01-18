
// motoanimation. . . ..

const text = "CODE | COLLABORATE | CONQUER";
const typewriterText = document.querySelector(".typewriter-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust typing speed
  } else {
    // Reset after a delay for infinite animation
    setTimeout(() => {
      typewriterText.textContent = "";
      index = 0;
      typeWriter();
    }, 1000); // Pause before restarting
  }
}

// Start the typewriter animation
typeWriter();









document.addEventListener("DOMContentLoaded", () => {
    const interface = document.getElementById("relodelogo");
  
    // Fade out the interface after 2 seconds
    setTimeout(() => {
      interface.classList.add("hide");
    }, 1000); // Adjust the delay as needed
  });
document.addEventListener("DOMContentLoaded", () => {
    const interface = document.getElementById("relode");

    //  Disable scrolling
    document.body.style.overflow = "hidden";

  
    // Fade out the interface after 2 seconds
    setTimeout(() => {
      interface.classList.add("hide");

      // Enable scrolling
    document.body.style.overflow = "auto";
    }, 2000); // Adjust the delay as needed

    
  });



// const starContainer = document.querySelector('body');
// const starCount = 700; // Number of stars

// for (let i = 0; i < starCount; i++) {
//   const star = document.createElement('div');
//   star.classList.add('star');

//   // Random size for each star
//   const size = Math.random() * 3 + 1; // Star size between 1px and 4px
//   star.style.width = `${size}px`;
//   star.style.height = `${size}px`;

//   // Random initial position
//   star.style.top = `${Math.random() * 910}%`;
//   star.style.left = `${Math.random() * 99}%`;

//   // Random animation duration (no delay)
//   star.style.animationDuration = `${Math.random() * 10 + 5}s`; // Duration between 5s and 15s

//   starContainer.appendChild(star);
//   const colors = ['#fff', '#F4F5FF', '#f99', '#ff0000'];
//   star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
// }



// ham . . . . 
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navbarNavMobile = document.getElementById("navbarNavMobile");
let lastScrollTop = 0;

// Show/Hide Navbar on Scroll
window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add("navbar-hidden");
    } else {
        navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});

// Toggle Hamburger Menu
hamburger.addEventListener("click", () => {
    navbarNavMobile.classList.toggle("active");
});

// Dropdown Functionality for Desktop (Click)
const dropdownLinkDesktop = document.querySelector('.navbar-nav.desktop .nav-item.dropdown');
const dropdownMenuDesktop = dropdownLinkDesktop.querySelector('.dropdown-menu');

// Click functionality for dropdown in desktop view
dropdownLinkDesktop.addEventListener('click', (e) => {
    // e.preventDefault(); // Prevent the default anchor behavior
    dropdownMenuDesktop.classList.toggle('active'); // Toggle visibility
});

// Dropdown Functionality for Mobile (Click)
const dropdownLinkMobile = document.querySelector('.navbar-nav.mobile .nav-item.dropdown');
const dropdownMenuMobile = dropdownLinkMobile.querySelector('.dropdown-menu');

// Toggle the dropdown on click (in mobile menu)
dropdownLinkMobile.addEventListener('click', (e) => {
    // e.preventDefault(); // Prevent the default anchor behavior
    dropdownMenuMobile.classList.toggle('active'); // Toggle visibility
});









// scrolltry......................



 
// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// Create the scroll-based animation
gsap.timeline({
    scrollTrigger: {
        trigger: ".logo-container", // Element to track
        start: "top center", // When the top of the element hits the center of the viewport
        end: "bottom top", // When the bottom of the element leaves the viewport
        scrub: true, // Smooth animation tied to scroll
        markers: false, // Set to true for debug markers
    },
})
.fromTo(".logo-container", 
    { scale: 0.5, opacity: 1 }, // Initial state
    { scale: 1.5, opacity: 1, duration: 1 } // Scale up and fade in
)
.to(".logo-container", 
    { scale: 2, opacity: 0, duration: 1 } // Scale up further and fade out
);


// js for events
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: [0.1, 0.35, 0.5], // Trigger at 10%, 35%, 50% visibility
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target;

      // Add 'visible' class when element enters the viewport
      if (entry.isIntersecting) {
        // Add the 'visible' class to trigger the animation
        target.classList.add("visible");

        // Add specific styles based on element position or type
        if (target.tagName === "IMG") {
          target.style.setProperty('--y', '0'); // For img, set final position
          target.style.transition = "opacity 0.7s ease-in, transform 0.7s ease-in"; // Ease-in transition for img
        } else if (target.tagName === "P") {
          target.style.setProperty('--y', '50%'); // For p, set different final position
          target.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out"; // Ease-out transition for p
        }
      } else {
        // Remove the 'visible' class when element leaves the viewport
        target.classList.remove("visible");
      }
    });
  }, observerOptions);

  // Observe both image and paragraph elements
  const targets = document.querySelectorAll(".event img, .event p");
  targets.forEach((el) => observer.observe(el));
});


// contactus. . . . . . 



// Emailjs for contact
function sendMail(){
  Popup(event);
  let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("Email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("msg").value,
  }

  emailjs.send("service_ah787y9", "template_05nuzfd",parms);
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollCards = document.querySelectorAll(".scroll-card");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              // Add 'scroll-visible' class whenever an element comes into view
              entry.target.classList.add("scroll-visible");
          } else {
              // Optionally remove the class if you want it to animate again when it goes out of view
              entry.target.classList.remove("scroll-visible");
          }
      });
  }, {
      threshold: 0.2,  // Adjusted threshold for earlier triggering (when 20% of the element is in view)
  });

  scrollCards.forEach((card) => {
      observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Remove the visible class when the element goes out of view
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 } // Adjust this value for when the animation triggers
  );

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("scroll", () => {
  const fadeElements = document.querySelectorAll(".fade-in-text");
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
});

// Select the card
// Apply mouse movement effect to .unique-card
const card = document.querySelector('.unique-card');

card.addEventListener('mousemove', (e) => {
  const cardRect = card.getBoundingClientRect();
  const cardX = cardRect.left + cardRect.width / 2; // Center X of the card
  const cardY = cardRect.top + cardRect.height / 2; // Center Y of the card

  const deltaX = e.clientX - cardX;
  const deltaY = e.clientY - cardY;

  // Calculate rotation angles based on mouse position
  const rotateX = (deltaY / cardRect.height) * 5;  // Adjust sensitivity
  const rotateY = (deltaX / cardRect.width) * -10; // Adjust sensitivity

  // Apply rotation on hover
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset card rotation when the mouse leaves the area
card.addEventListener('mouseleave', () => {
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});
function Popup(event) {
  event.preventDefault(); // Prevent form submission

  // Show the popup
  document.getElementById("successPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("successPopup").style.display = "none";

}

