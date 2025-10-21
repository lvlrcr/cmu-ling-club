// HOMEPAGE

// Scroll down to meetings and socials sections when clicked on homepage

function scrollEventListener(element) {
  return e => {
    e.preventDefault()
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}
const meetingsSection = document.getElementById("meetings")
const socialsSection = document.getElementById("socials")

document.getElementById("scroll-to-meetings").
  addEventListener("click", scrollEventListener(meetingsSection))
document.getElementById("scroll-to-meetings-2").
  addEventListener("click", scrollEventListener(meetingsSection))
document.getElementById("scroll-to-socials").
  addEventListener("click", scrollEventListener(socialsSection))

  