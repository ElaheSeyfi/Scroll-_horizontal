const slider = document.querySelector(".slider");

function updateSlider() {
  const sectionWidth = window.innerWidth;
  const totalSections = slider.children.length;
  const isMobile = window.innerWidth < 768; 

  if (!isMobile) {
    const totalWidth = sectionWidth * totalSections;
    slider.style.width = `${totalWidth}px`;
    document.body.style.height = `${sectionWidth * (totalSections - 1) + window.innerHeight}px`;

    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
  } else {
    document.body.style.height = 'auto';
    slider.style.transform = "none";
    slider.style.width = "100vw";

    window.removeEventListener("scroll", handleScroll);
  }
}

function handleScroll() {
  const slider = document.querySelector(".slider");
  const sectionWidth = window.innerWidth;
  const scrollPosition = window.scrollY;

  const maxTranslateX = sectionWidth * (slider.children.length - 1);
  const translateX = Math.min(scrollPosition, maxTranslateX);
  slider.style.transform = `translateX(-${translateX}px)`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateSlider();
  window.addEventListener("resize", updateSlider); 
});
const main=document.querySelector('.menu')
const navbar_menu=document.querySelector('.navbar-menu')
main.addEventListener('click',()=>{

  navbar_menu.classList.toggle('hide')
})