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
    fetch("http://moviesapi.ir/api/v1/movies?page={page}")
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
        setLoading(false);
      }),
      (error) => {
        console.error("Error fetching data:", error);
      };
  }, []);
  console.log(data);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="movies">
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1> <img src={item.poster} />
        </div>
      ))}
    </div>
  );
};
//////////////////////////////////////////////////////
ReactDOM.render(<App />, document.getElementById("root"));
