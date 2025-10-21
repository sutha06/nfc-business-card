const PORTFOLIO_URL = "https://yourportfolio.com";

function isMobile() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth <= 768
  );
}

function handlePortfolioClick() {
  if (isMobile()) {
    document.getElementById("portfolioModal").classList.add("show");
  } else {
    window.open(PORTFOLIO_URL, "_blank");
  }
}

function closeModal() {
  document.getElementById("portfolioModal").classList.remove("show");
}

function copyPortfolioLink() {
  const button = document.querySelector(".modal-btn");
  const feedback = document.getElementById("copyFeedback");

  // Store original content
  const originalContent = button.innerHTML;

  navigator.clipboard.writeText(PORTFOLIO_URL).then(() => {
    // Clear button content and add copied class
    button.innerHTML = "";
    button.classList.add("copied");
    feedback.classList.add("show");

    // Reset after 2 seconds
    setTimeout(() => {
      button.classList.remove("copied");
      button.innerHTML = originalContent;
      feedback.classList.remove("show");
    }, 2000);
  });
}

// Close modal when clicking outside
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("portfolioModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal();
      }
    });
  }
});
