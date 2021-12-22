const buttons = document.querySelectorAll(".btn");
const clicked = () => {
  buttons.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.classList[0]);
    });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", clicked);
} else {
  clicked();
}