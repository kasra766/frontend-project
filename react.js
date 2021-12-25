const i = React.createElement("i", {
  className: "Suggestion fas fa-1x fa-chevron-down",
});
//////////////////////////////////////////////////////
const li = (parentClass, childClass, childContext) =>
  React.createElement(
    "li",
    {
      className: parentClass,
    },
    React.createElement(
      "button",
      {
        className: childClass,
        onClick: (e) => {
          console.log(e.target.classList[0]);
        },
      },
      childContext
    )
  );
//////////////////////////////////////////////////////

const ul = React.createElement(
  "ul",
  {
    className: "buttons",
  },
  li("btnFollow", "Follow bigButton", "Follow"),
  li("btnMessage", "Message bigButton", "Message"),
  li("btnDownArrow", "Suggestion smallButton", i)
);
//////////////////////////////////////////////////////
ReactDOM.render(ul, document.getElementById("root"));
