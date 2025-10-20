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
  navigator.clipboard.writeText(PORTFOLIO_URL).then(() => {
    const feedback = document.getElementById("copyFeedback");
    feedback.classList.add("show");
    setTimeout(() => {
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
