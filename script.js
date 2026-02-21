// Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Handle logo image loading
        window.addEventListener('load', function() {
            const logoImages = document.querySelectorAll('.logo-image');
            logoImages.forEach(img => {
                img.addEventListener('error', function() {
                    // Hide image and show SVG fallback if image fails to load
                    this.style.display = 'none';
                    const svg = this.nextElementSibling;
                    if (svg && svg.classList.contains('logo-icon')) {
                        svg.style.display = 'block';
                    }
                });
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            const scrollToTop = document.getElementById('scrollToTop');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Show/hide scroll to top button
            if (window.scrollY > 300) {
                scrollToTop.classList.add('visible');
            } else {
                scrollToTop.classList.remove('visible');
            }
        });

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const btn = document.getElementById('mobileMenuBtn');
            menu.classList.toggle('active');
            btn.classList.toggle('active');
        }

        function closeMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const btn = document.getElementById('mobileMenuBtn');
            menu.classList.remove('active');
            btn.classList.remove('active');
        }

        // Market Ticker
        const newsItems = [
            "SENSEX UP 2.5% | Breaking: Tech stocks rally on positive earnings",
            "NIFTY at all-time high | Banking sector shows strong growth",
            "Gold prices surge 3% | Global markets respond to Fed decision",
            "Rupee strengthens against dollar | FII inflows continue",
            "New IPO alert: Strong subscription rates expected",
            "Market experts predict bullish trend for Q1 2026"
        ];

        const tickerContent = document.getElementById('tickerContent');
        const allNews = [...newsItems, ...newsItems];
        
        allNews.forEach(news => {
            const item = document.createElement('div');
            item.className = 'ticker-item';
            item.innerHTML = `
                <svg class="ticker-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span class="ticker-text">${news}</span>
            `;
            tickerContent.appendChild(item);
        });

        // Form Submit Handler
        function handleSubmit(event) {
            event.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
            event.target.reset();
        }

        // Scroll to Top Function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Smooth Scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    closeMobileMenu(); // Close mobile menu after clicking
                }
            });
        });

        // Add parallax effect to hero blobs
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const blob1 = document.querySelector('.hero-blob-1');
            const blob2 = document.querySelector('.hero-blob-2');
            
            if (blob1 && blob2) {
                blob1.style.transform = `translateY(${scrolled * 0.5}px)`;
                blob2.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });

        // Add counter animation for stats
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target + (element.textContent.includes('+') ? '+' : '%');
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : target > 100 ? '' : '%');
                }
            }, 16);
        }

        // Trigger counter animation when stats are in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    const text = entry.target.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    animateCounter(entry.target, number);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.stat-number, .stats-number').forEach(stat => {
            observer.observe(stat);
        });

        console.log('%c🚀 Fortune Mantra Academy Website Loaded Successfully!', 'color: #f59e0b; font-size: 20px; font-weight: bold;');
        console.log('%c📞 Contact: 7091674769', 'color: #fbbf24; font-size: 16px;');
        console.log('%c📍 Location: Patna, Bihar', 'color: #fbbf24; font-size: 16px;');
    


document.addEventListener("DOMContentLoaded", function () {

  /* 🔴 STEP 1: PUT YOUR EMAILJS PUBLIC KEY HERE */
  emailjs.init("zQNwGQaOV99yFsROO");

  const form = document.getElementById("enquiryForm");
  if (!form) {
    console.error("❌ enquiryForm not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_hdiylwo",   // 🔴 STEP 2
      "template_hynl05n",  // 🔴 STEP 3
      this
    ).then(
      function () {
        alert("✅ Enquiry sent successfully!");
        form.reset();
      },
      function (error) {
        alert("❌ Failed to send enquiry");
        console.error("EmailJS Error:", error);
      }
    );
  });

});