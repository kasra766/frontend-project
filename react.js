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
  const [loading, setLoading] = useState(true);



  
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      }),
      (error) => {
        console.error("Error fetching data:", error);
      };
  }, [data]);



  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>{JSON.stringify(data, null, 2)}</div>
  );
};
//////////////////////////////////////////////////////
ReactDOM.render(<App />, document.getElementById("root"));
