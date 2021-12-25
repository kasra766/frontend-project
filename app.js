const Header = ({ title }) => (
  <>
    <ul className="header">
      <li>
        <span
          onClick={() => {
            console.log("Backward");
          }}
          className="Backward leftSideLogo"
        >
          <i className="fas fa-chevron-left"></i>
        </span>
      </li>
      <li>
        <div>
          <h1>{title}</h1>
          <img
            className="verifyTick"
            src="img/verify-tick.png"
            alt="verify-tick"
          />
        </div>
      </li>
      <li>
        <span
          onClick={() => {
            console.log("Setting");
          }}
          className="rightSideLogo"
        >
          <i className="fas fa-2x fa-ellipsis-h"></i>
        </span>
      </li>
    </ul>
  </>
);
Header.propTypes = {
  title: PropTypes.string,
};

const Body = ({ btnFollow }) => (
  <>
    <div>
      <ul className="mainInfoItem">
        <li>
          <img src="img/instalogo.png" alt="insta-logo" />
        </li>
        <li>
          <h1>6,039</h1>
          <p>Posts</p>
        </li>
        <li>
          <h1>350 M</h1>
          <p>Followers</p>
        </li>
        <li>
          <h1>101</h1>
          <p>Following</p>
        </li>
      </ul>
    </div>
    <div className="bio">
      <h1>Instagram</h1>
      <p>
        Bringing you closer to the people and things you love.
        <i className="fas fa-heart"></i>
      </p>
      <a
        href="#"
        onClick={() => {
          console.log("Link");
        }}
      >
        www.facebook.com/covidsupport
      </a>
    </div>
    <div>
      <ul className="buttons">
        <li className="btnFollow">
          <button
            onClick={() => {
              console.log("Follow");
            }}
            className="follow bigButton"
          >
            {btnFollow}
          </button>
        </li>
        <li className="btnMessage">
          <button
            onClick={() => {
              console.log("Message");
            }}
            className="message bigButton"
          >
            Message
          </button>
        </li>
        <li className="btnDownArrow">
          <button
            onClick={() => {
              console.log("Suggestion");
            }}
            className="smallButton"
          >
            <i className="fas fa-1x fa-chevron-down"></i>
          </button>
        </li>
      </ul>
    </div>
  </>
);
Body.propTypes = {
  btnFollow: PropTypes.string,
};

const App = () => (
  <div className="app">
    <Header title="instagram" />
    <Body btnFollow="Follow" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
