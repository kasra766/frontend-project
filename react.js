// const ShowDuck = () => {
//   const { useState, useEffect } = React;
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch("https://random-d.uk/api/v2")
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   }, [data]);
//   return <div>{JSON.stringify(data)}</div>;
// };

const App = () => {
  const { useState, useEffect } = React;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://random-d.uk/api/v2")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data]);
  return <div>{JSON.stringify(data)}</div>;
};
//////////////////////////////////////////////////////
ReactDOM.render(<App />, document.getElementById("root"));
