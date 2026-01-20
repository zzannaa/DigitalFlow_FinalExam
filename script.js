// ============================================
// BURGER MENU FUNCTIONALITY
// ============================================
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const logo = document.querySelector(".logo");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Logo click - scroll to top
logo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// COOKIE NOTIFICATION (LocalStorage)
// ============================================
const cookieNotification = document.getElementById("cookieNotification");
const cookieAccept = document.getElementById("cookieAccept");
const cookieDecline = document.getElementById("cookieDecline");

// Check if user has already made a choice
window.addEventListener("load", () => {
  const cookieConsent = localStorage.getItem("cookieConsent");
  if (!cookieConsent) {
    setTimeout(() => {
      cookieNotification.classList.add("show");
    }, 1000);
  }
});

cookieAccept.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  cookieNotification.classList.remove("show");
});

cookieDecline.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "declined");
  cookieNotification.classList.remove("show");
});

// ============================================
// SERVICES
// ============================================
async function loadServices() {
  const servicesGrid = document.getElementById("servicesGrid");

  // Real services data
  const services = [
    {
      icon: "🚀",
      title: "ვებ დეველოპმენტი",
      description:
        "თანამედროვე და რესპონსიული ვებსაიტების შექმნა უახლესი ტექნოლოგიების გამოყენებით. React, Vue, Node.js",
    },
    {
      icon: "💡",
      title: "დიგიტალური მარკეტინგი",
      description:
        "სრული სპექტრის მარკეტინგული სერვისები: SEO, SEM, სოციალური მედია და კონტენტ მარკეტინგი",
    },
    {
      icon: "📱",
      title: "მობილური აპლიკაციები",
      description:
        "iOS და Android აპლიკაციების დიზაინი და დეველოპმენტი მაღალი ხარისხით",
    },
    {
      icon: "🎨",
      title: "UI/UX დიზაინი",
      description:
        "მომხმარებელზე ორიენტირებული დიზაინი და ინტერაქტიული ინტერფეისების შექმნა",
    },
    {
      icon: "📊",
      title: "ანალიტიკა და SEO",
      description:
        "ვებსაიტის ოპტიმიზაცია საძიებო სისტემებისთვის და ტრაფიკის ანალიზი",
    },
    {
      icon: "🔍",
      title: "ბრენდინგი",
      description:
        "სრული ბრენდინგის სერვისები: ლოგო, ფირმული სტილი, ბრენდ სტრატეგია",
    },
  ];

  try {
    // Clear loading spinner
    servicesGrid.innerHTML = "";

    // Create service cards
    services.forEach((service, index) => {
      const serviceCard = document.createElement("div");
      serviceCard.className = "service-card";
      serviceCard.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;

      servicesGrid.appendChild(serviceCard);

      // Add animation with delay
      setTimeout(() => {
        serviceCard.classList.add("visible");
      }, index * 100);
    });
  } catch (error) {
    console.error("Error loading services:", error);
  }
}

// Call the function when page loads
loadServices();

// ============================================
// PORTFOLIO - FETCH IMAGES FROM API
// ============================================
async function loadPortfolio() {
  const portfolioGrid = document.getElementById("portfolioGrid");

  try {
    const imageIds = [1, 10, 20, 30, 40, 50];

    portfolioGrid.innerHTML = "";

    const projects = [
      { title: "E-commerce Platform", description: "ონლაინ მაღაზიის შექმნა" },
      {
        title: "Mobile App Design",
        description: "მობილური აპლიკაციის დიზაინი",
      },
      { title: "Brand Identity", description: "ბრენდის იდენტობის შექმნა" },
      {
        title: "Social Media Campaign",
        description: "სოციალური მედიის კამპანია",
      },
      { title: "SEO Optimization", description: "საძიებო ოპტიმიზაცია" },
      { title: "Content Strategy", description: "კონტენტ სტრატეგია" },
    ];

    projects.forEach((project, index) => {
      const portfolioItem = document.createElement("div");
      portfolioItem.className = "portfolio-item";
      portfolioItem.style.backgroundImage = `url(https://picsum.photos/600/400?random=${imageIds[index]})`;
      portfolioItem.style.backgroundSize = "cover";
      portfolioItem.style.backgroundPosition = "center";

      portfolioItem.innerHTML = `
                <div class="portfolio-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;

      portfolioGrid.appendChild(portfolioItem);

      setTimeout(() => {
        portfolioItem.style.opacity = "1";
        portfolioItem.style.transform = "scale(1)";
      }, index * 100);
    });
  } catch (error) {
    console.error("Error loading portfolio:", error);

    portfolioGrid.innerHTML =
      '<p style="color: var(--text-light); text-align: center;">პორტფოლიოს ჩატვირთვა ვერ მოხერხდა</p>';
  }
}

loadPortfolio();

// --------- FETCHING TESTIMONIAL USER AND COMMENTS ------------
const commentsURL = "https://jsonplaceholder.typicode.com/posts/1/comments";
const usersURL = "https://jsonplaceholder.typicode.com/users";

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then(function (response) {
    return response.json();
  })
  .then(function (comments) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (users) {
        var cards = document.querySelectorAll(".testimonial-card");

        for (var i = 0; i < cards.length; i++) {
          var randomCommentIndex = Math.floor(Math.random() * comments.length);
          var randomUserIndex = Math.floor(Math.random() * users.length);

          var comment = comments[randomCommentIndex];
          var user = users[randomUserIndex];

          cards[i].querySelector(".testimonial-text").textContent =
            comment.body;

          cards[i].querySelector(".author-name").textContent = user.name;

          cards[i].querySelector(".author-avatar").src =
            "https://picsum.photos/80?random=" + Math.random();
        }
      });
  });
// ============================================
// TEAM
// ============================================
async function loadTeam() {
  const teamGrid = document.getElementById("teamGrid");

  const teamMembers = [
    {
      name: "გიორგი მელაძე",
      position: "CEO & დამფუძნებელი",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "ნინო ქურდაძე",
      position: "Creative Director",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "დავით ლობჟანიძე",
      position: "Lead Designer",
      photo: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      name: "თამარ გელოვანი",
      position: "Marketing Manager",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  // Clear loading spinner
  teamGrid.innerHTML = "";

  teamMembers.forEach((member, index) => {
    const teamMember = document.createElement("div");
    teamMember.className = "team-member";

    teamMember.innerHTML = `
            <div class="team-avatar">
                <img src="${member.photo}" alt="${member.name}">
            </div>
            <h3>${member.name}</h3>
            <p>${member.position}</p>
        `;

    teamGrid.appendChild(teamMember);

    // Add animation
    setTimeout(() => {
      teamMember.style.opacity = "1";
      teamMember.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Call the function
loadTeam();

// ============================================
// FORM VALIDATION WITH REGEX
// ============================================
const contactForm = document.getElementById("contactForm");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const serviceSelect = document.getElementById("service");
const messageInput = document.getElementById("message");

// Regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^5\d{8}$/; // Georgian mobile format
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // Min 8 chars, 1 uppercase, 1 number
const nameRegex = /^[a-zA-Zა-ჰ\s]+$/; // Only letters (Georgian and Latin) and spaces

// Validation functions
function validateField(input, regex, minLength = 0) {
  const value = input.value.trim();
  const formGroup = input.closest(".form-group");

  if (value === "") {
    formGroup.classList.add("error");
    return false;
  }

  if (minLength && value.length < minLength) {
    formGroup.classList.add("error");
    return false;
  }

  if (regex && !regex.test(value)) {
    formGroup.classList.add("error");
    return false;
  }

  formGroup.classList.remove("error");
  return true;
}

// Real-time validation
fullnameInput.addEventListener("blur", () =>
  validateField(fullnameInput, nameRegex, 3),
);
emailInput.addEventListener("blur", () =>
  validateField(emailInput, emailRegex),
);
phoneInput.addEventListener("blur", () =>
  validateField(phoneInput, phoneRegex),
);
passwordInput.addEventListener("blur", () =>
  validateField(passwordInput, passwordRegex),
);
messageInput.addEventListener("blur", () =>
  validateField(messageInput, null, 10),
);

// Prevent non-letter characters in name field
fullnameInput.addEventListener("input", (e) => {
  const value = e.target.value;
  const filteredValue = value.replace(/[^a-zA-Zა-ჰ\s]/g, "");
  if (value !== filteredValue) {
    e.target.value = filteredValue;
  }
});

serviceSelect.addEventListener("change", () => {
  const formGroup = serviceSelect.closest(".form-group");
  if (serviceSelect.value === "") {
    formGroup.classList.add("error");
  } else {
    formGroup.classList.remove("error");
  }
});

// ============================================
// SHOW/HIDE PASSWORD
// ============================================
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

// ============================================
// FORM SUBMISSION
// ============================================
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate all fields
  const isFullnameValid = validateField(fullnameInput, nameRegex, 3);
  const isEmailValid = validateField(emailInput, emailRegex);
  const isPhoneValid = validateField(phoneInput, phoneRegex);
  const isPasswordValid = validateField(passwordInput, passwordRegex);
  const isMessageValid = validateField(messageInput, null, 10);

  const isServiceValid = serviceSelect.value !== "";
  if (!isServiceValid) {
    serviceSelect.closest(".form-group").classList.add("error");
  }

  // If all fields are valid
  if (
    isFullnameValid &&
    isEmailValid &&
    isPhoneValid &&
    isPasswordValid &&
    isServiceValid &&
    isMessageValid
  ) {
    // Store form data in sessionStorage
    const formData = {
      fullname: fullnameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      service: serviceSelect.value,
      message: messageInput.value,
      timestamp: new Date().toISOString(),
    };

    sessionStorage.setItem("contactFormData", JSON.stringify(formData));

    // Show success message
    alert(
      "✅ თქვენი შეტყობინება წარმატებით გაიგზავნა!\nჩვენ მალე დაგიკავშირდებით.",
    );

    // Reset form
    contactForm.reset();

    // Remove all error classes
    document.querySelectorAll(".form-group").forEach((group) => {
      group.classList.remove("error");
    });
  } else {
    alert("❌ გთხოვთ შეავსოთ ყველა ველი სწორად!");
  }
});

// ============================================
// SCROLL ANIMATION FOR ELEMENTS
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease";
  observer.observe(section);
});

// ============================================
// LOAD SAVED FORM DATA FROM SESSION STORAGE
// ============================================
window.addEventListener("load", () => {
  const savedData = sessionStorage.getItem("contactFormData");
  if (savedData) {
    console.log("Previously submitted form data:", JSON.parse(savedData));
  }
});
