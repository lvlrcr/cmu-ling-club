// ABOUT US

// Modular officer bios (becoming a pain to re-paste all officer names/positions every time I reformat)
const biosContainer = document.getElementById("exec-bios")

function addOfficer(officer) {
  const officerBio = document.createElement("div")
  officerBio.className = "officer-bio"
  officerBio.innerHTML = `
    <div class="headshot-cell">
      <img class="headshot" src="${officer.headshotImg}" />
      <p class="name-title">
        ${officer.title} <br /> ${officer.name}
      </p>
    </div>
    <p class="bio-text">
      ${officer.bioText}
    </p>
  `
  // Make headshot/bio placements staggered
  if (biosContainer.childElementCount % 2 == 1) {
    officerBio.style.flexDirection = "row-reverse"
  }

  biosContainer.appendChild(officerBio)
  console.log(`added ${officer.name}`)
  return officerBio
}

const officers = [
  { title: "President", name: "Lou Feng", headshotImg: "/assets/cmuwug.png", bioText: "[bio here]" },
  { title: "Social Media / PR", name: "Riley Lawrence", headshotImg: "/assets/cmuwug.png", bioText: "[bio here]" },
  { title: "Secretary", name: "Helen Amon", headshotImg: "/assets/cmuwug.png", bioText: "[bio here]" },
  { title: "Events Coordinator", name: "Noor Warner", headshotImg: "/assets/cmuwug.png", bioText: "[bio here]" },
  { title: "Treasurer", name: "Leo Frankel", headshotImg: "/assets/cmuwug.png", bioText: "[bio here]" },
  { title: "Historian / Webmaster", name: "Larry Zhang", headshotImg: "/assets/cmuwug.png", bioText: "[bio here]" },
]
officers.forEach(addOfficer)
