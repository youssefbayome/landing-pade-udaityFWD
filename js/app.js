const navigation = document.getElementById("navbar__list");
// sections global var
const sections = document.querySelectorAll("section");

// build the nav

const nav = () => {
  let navLinks = "";
  // looping over all sections
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;

    navLinks += `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
  });
  // append all elements to the navigation
  navigation.innerHTML = navLinks;
};

nav();

function isInViewport (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


// add active class

function setActiveClass() {
  for (let i = 0; i < sections.length; i++) {
    if (isInViewport(sections[i])) {
      sections[i].classList.add("your-active-class");
    } else {
      sections[i].classList.remove("your-active-class");
    }
  }
}
document.addEventListener("scroll", function () {
  setActiveClass();
});
