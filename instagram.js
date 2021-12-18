const backward = document.querySelector(".leftSideLogo");
backward.addEventListener("click", () => {
  console.log("Backward");
});

const setting = document.querySelector(".rightSideLogo");
setting.addEventListener("click", () => {
  console.log("Setting");
});

const link = document.querySelector("#link");
link.addEventListener("click", () => {
  console.log("Link");
});

const follow = document.querySelector("#follow");
follow.addEventListener("click", () => {
  console.log("Follow");
});

const message = document.querySelector("#message");
message.addEventListener("click", () => {
  console.log("Message");
});

const suggestion = document.querySelector(".smallButton");
suggestion.addEventListener("click", () => {
  console.log("Suggestion");
});
