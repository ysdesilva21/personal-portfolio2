//hire btn
document.getElementById("topHireBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Select all mobile nav links
const menuElement = document.getElementById('offcanvasNavbar');

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const offcanvas = bootstrap.Offcanvas.getInstance(menuElement);
    if (offcanvas) offcanvas.hide();
  });
});