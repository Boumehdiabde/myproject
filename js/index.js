document.addEventListener("DOMContentLoaded", function () {

  // 🔹 Smooth scroll لكل الروابط
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 🔹 زر الرجوع للأعلى
  const topBtn = document.createElement("button");
  topBtn.innerText = "↑";
  topBtn.id = "topBtn";
  document.body.appendChild(topBtn);

  topBtn.style.position = "fixed";
  topBtn.style.bottom = "20px";
  topBtn.style.right = "20px";
  topBtn.style.padding = "10px 15px";
  topBtn.style.borderRadius = "50%";
  topBtn.style.border = "none";
  topBtn.style.background = "#3b82f6";
  topBtn.style.color = "white";
  topBtn.style.cursor = "pointer";
  topBtn.style.display = "none";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 🔹 تأثير ظهور الكروت (Animation on scroll)
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
