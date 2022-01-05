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
const btnGenerator = (data, item) => {
  if (data.indexOf(item) === 0) {
    return (
      <button
        key={item.id}
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
    );
  }
  return (
    <button
      key={item.id}
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={`${data.indexOf(item)}`}
      aria-label={`Slide ${data.indexOf(item) + 1}`}
    ></button>
  );
};
const slideGenerator = (data, item, handleClick) => {
  if (data.indexOf(item) === 0) {
    return (
      <div
        onClick={() => handleClick(item.id)}
        key={item.id}
        value={item}
        className="carousel-item active"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={item.poster} className="d-block w-100" />
        <div className="carousel-caption d-none d-md-block">
          <h1>{item.title}</h1>
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={() => handleClick(item.id)}
      key={item.id}
      value={item}
      className="carousel-item"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <img src={item.poster} className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h1>{item.title}</h1>
      </div>
    </div>
  );
};
const Loading = () => (
  <div className="d-flex justify-content-center align-items-center">
    <div>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
);

const Carousel = ({ data, handleClick, btnGenerator, slideGenerator }) => {
  const { useEffect, useCallback } = React;
  const changeBackground = useCallback(() => {
    const { src } = document.querySelector("div.carousel-item.active img");
    document.body.style.backgroundImage = `url(${src})`;
    console.log("change");
  }, []);
  
  useEffect(() => {
    const carousel = document.getElementById("carouselExampleCaptions");
    carousel.addEventListener("slide.bs.carousel", changeBackground);
  }, []);
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {data.map((item) => btnGenerator(data, item))}
      </div>
      <div className="carousel-inner">
        {data.map((item) => slideGenerator(data, item, handleClick))}
      </div>

      <button
        onClick={changeBackground}
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        onClick={changeBackground}
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const Modal = ({ showDetail }) => (
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title" id="exampleModalLabel">
            {showDetail.title}
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="d-flex flex-column">
            <span className="fs-4">Country: {showDetail.country}</span>
            <span className="fs-4">
              Genres: {showDetail.genres.join(" , ")}
            </span>
            <span className="fs-4">Imdb: {showDetail.imdb_rating}</span>
            <span className="fs-4">Year: {showDetail.year}</span>
          </div>
          <div>
            <span className="fs-4">Images:</span>
            <div className="d-flex justify-content-start flex-wrap">
              {showDetail.images.map((img) => (
                <img
                  className="my-2 mx-2"
                  key={img}
                  src={img}
                  alt={showDetail.title}
                  width="200px"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
const App = () => {
  const { useState, useEffect } = React;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetail, setShowDetail] = useState(null);
  useEffect(() => {
    fetch("http://moviesapi.ir/api/v1/movies?page={page}")
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setShowDetail(res.data[0]);
      }),
      (error) => {
        console.error("Error fetching data:", error);
      };
  }, []);

  const handleClick = (id) => {
    setShowDetail(data.find((item) => item.id === id));
  };
  // const handleBg = () =>{
  //   const {src} = document.querySelector("div.carousel-item.active img");
  //   setBg(src);

  // }

  return loading ? (
    <Loading />
  ) : (
    <div className="movies">
      <Carousel
        data={data}
        handleClick={handleClick}
        btnGenerator={btnGenerator}
        slideGenerator={slideGenerator}
      />
      {showDetail && <Modal showDetail={showDetail} />}
    </div>
  );
};
//////////////////////////////////////////////////////
ReactDOM.render(<App />, document.getElementById("root"));
