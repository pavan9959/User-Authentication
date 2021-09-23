import { Route, Link, withRouter } from "react-router-dom";
import Home from "./Home";
import Loggin from "./Loggin";
import Register from "./Register";
import Account from "./Account";
import My_notes from "./My_notes";

const Nav = (props) => {
  const { userlogedin, handelaut } = props;

  return (
    <div>
      {userlogedin ? (
        <ul>
          <>
            <li>
              <Link to="/Home/">Home</Link>
            </li>
            <li>
              <Link to="/Account/">Account</Link>
            </li>
            <li>
              <Link to="/My_notes/">My_notes</Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  localStorage.removeItem("token");
                  handelaut();
                  props.history.push("/Home/");
                }}
              >
                Logout
              </Link>
            </li>
          </>
        </ul>
      ) : (
        <ul>
          <>
            <li>
              <Link to="/Home/">Home</Link>
            </li>
            <li>
              <Link to="/Register/">Register</Link>
            </li>
            <li>
              <Link to="/Loggin/">Login</Link>
            </li>
          </>
        </ul>
      )}
      <Route path="/Home/" exact={true} component={Home} />
      <Route path="/Register/" exact={true} component={Register} />
      <Route
        path="/Loggin/"
        exact={true}
        render={(props) => {
          return <Loggin {...props} handelaut={handelaut} />;
        }}
      />
      <Route path="/Account/" exact={true} component={Account} />
      <Route path="/My_notes/" exact={true} component={My_notes} />
    </div>
  );
};
export default withRouter(Nav);
