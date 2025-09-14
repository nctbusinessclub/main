document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded!");
});
  

  // Modal đăng ký
  const modal = document.getElementById("modal");
  const btns = document.querySelectorAll(".btn, .btn-cta"); // nút đăng ký
  const closeBtn = document.querySelector(".close");

  btns.forEach(btn => {
    if (btn.textContent.includes("Đăng ký")) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
      });
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Submit form
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Đăng ký thành công! CLB sẽ liên hệ với bạn.");
    modal.style.display = "none";
    form.reset();
  });
;
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
function toggleProject(element) {
  element.classList.toggle("active");
}