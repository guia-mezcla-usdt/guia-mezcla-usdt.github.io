const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#menu-principal");

if (navToggle && navLinks) {
  function closeMenu() {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement && navLinks.classList.contains("is-open")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
      closeMenu();
      navToggle.focus();
    }
  });
}

const checklistItems = Array.from(document.querySelectorAll(".check-item input"));
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");

function updateChecklistProgress() {
  const checkedCount = checklistItems.filter((item) => item.checked).length;
  const total = checklistItems.length;
  const percent = total ? (checkedCount / total) * 100 : 0;

  if (progressText) {
    progressText.textContent = `${checkedCount} de ${total}`;
  }

  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }
}

checklistItems.forEach((item) => {
  item.addEventListener("change", updateChecklistProgress);
});

updateChecklistProgress();