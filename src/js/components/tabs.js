const tabs = document.querySelectorAll(".tabs__nav-btn");
const contents = document.querySelectorAll(".tabs__panel");
const underline = document.querySelector(".tabs__underline");

function updateUnderline() {
  const activeTab = document.querySelector(".tabs__nav-btn--active");
  underline.style.width = `${activeTab.offsetWidth}px`;
  underline.style.left = `${activeTab.offsetLeft}px`;
  console.log(underline.style.left);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("tabs__nav-btn--active"));
    tab.classList.add("tabs__nav-btn--active");

    const target = tab.getAttribute("data-target");

    contents.forEach((content) => {
      if (content.id === target) {
        content.classList.add("tabs__panel--active");
      } else {
        content.classList.remove("tabs__panel--active");
      }
    });
    updateUnderline();
  });
});

window.addEventListener("resize", updateUnderline);
updateUnderline();
