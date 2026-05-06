document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Get Started button handler
  const getStartedBtn = document.getElementById("getStartedBtn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function () {
      document.getElementById("docs").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Back to top button
  const topBtn = document.createElement("button");
  topBtn.innerText = "↑";
  topBtn.id = "topBtn";
  topBtn.setAttribute("aria-label", "Back to top");
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Card animation on scroll
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
  });

});