// Navigation
const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")
const navbar = document.querySelector(".navbar")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Sticky navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".service-card, .portfolio-item, .blog-card, .testimonial-card").forEach((el) => {
  observer.observe(el)
})

// Contact Form Validation
const contactForm = document.getElementById("contactForm")
const formMessage = document.getElementById("formMessage")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  // Validation
  if (!name) {
    showMessage("Please enter your name", "error")
    return
  }

  if (!email || !isValidEmail(email)) {
    showMessage("Please enter a valid email", "error")
    return
  }

  if (!message) {
    showMessage("Please enter your message", "error")
    return
  }

  // Success
  showMessage("Thank you! Your message has been sent successfully.", "success")
  contactForm.reset()

  // Clear message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = ""
    formMessage.classList.remove("success", "error")
  }, 5000)
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function showMessage(text, type) {
  formMessage.textContent = text
  formMessage.classList.remove("success", "error")
  formMessage.classList.add(type)
}

// Smooth scroll fallback for older browsers
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})

// Add scroll animations
window.addEventListener("load", () => {
  document.querySelectorAll(".service-card, .portfolio-item, .blog-card, .testimonial-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
  })
})
