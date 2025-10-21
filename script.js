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

function showLinks() {
  const linksSection = document.getElementById("linksSection");
  linksSection.classList.toggle("hidden");
}

function saveContact() {
  // Create vCard content
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Suthakaran Siva
N:Siva;Suthakaran;;;
TITLE:IT Support & System Administration
EMAIL;TYPE=INTERNET:suthakaran.siva0601@gmail.com
TEL;TYPE=CELL:+14167107465
URL:https://github.com/sutha06
ADR;TYPE=HOME:;;Toronto;Ontario;;Canada
END:VCARD`;

  // Create blob and download
  const blob = new Blob([vCard], { type: "text/vcard" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Suthakaran_Siva.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
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
