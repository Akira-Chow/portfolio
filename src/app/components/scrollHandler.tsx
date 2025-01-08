export const initScrollHandler = () => {
  const handleScroll = () => {
    const sections = ["about", "experience"];
    let currentSection = "";

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section;
        }
      }
    });

    if (currentSection) {
      const activeLink = document.querySelector(
        `nav a[href="#${currentSection}"]`
      );
      if (activeLink) {
        document
          .querySelectorAll("nav a")
          .forEach((link) => link.classList.remove("active"));
        activeLink.classList.add("active");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
