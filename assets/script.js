
const meetingsLink = document.getElementById("scroll-to-meetings");
const meetingsSection = document.getElementById("meetings");
meetingsLink.addEventListener("click", e => {
  e.preventDefault();
  meetingsSection.scrollIntoView({ behavior: "smooth", block: "start" })
});

