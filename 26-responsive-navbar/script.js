document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Xử lý bật/tắt class 'active' khi nhấn vào biểu tượng ☰
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});