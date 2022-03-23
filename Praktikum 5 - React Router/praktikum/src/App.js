import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

// d. Use Redirects (Auth)

export default function AuthExample() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fakeAuth = {
    isAuthenticated: isAuthenticated,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setIsAuthenticated(true);
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      setIsAuthenticated(false);
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

  return (
    <Router>
      <div>
        <AuthButton fakeAuth={fakeAuth} isAuthenticated={isAuthenticated} />

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage fakeAuth={fakeAuth} />
          </Route>
          <PrivateRoute path="/private" fakeAuth={fakeAuth}>
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function AuthButton(props) {
  const { fakeAuth, isAuthenticated } = props;
  let history = useHistory();

  return isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  const { fakeAuth } = rest;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Private</h3>;
}

function LoginPage(props) {
  const { fakeAuth } = props;

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}


// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/private">Private Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/public">
//             <PublicPage />
//           </Route>

//           <Route path="/login">
//             <LoginPage />
//           </Route>

//           <PrivateRoute path="/private">
//             <ProtectedPage />
//           </PrivateRoute>

//         </Switch>
//       </div>
//     </Router>
//   )

// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },

//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }

// };

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button onClick={() => {
//         fakeAuth.signout(() => history.push("/"));
//       }}
//       >
//         Sign Out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   )
// }

// function PublicPage() {
//   return <h3>Public</h3>
// }

// function ProtectedPage() {
//   return <h3>Private</h3>
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }


// c. Nesting Router

// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Router exact path="/">
//             <Home />
//           </Router>
//           <Router path="/topics">
//             <Topics />
//           </Router>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   )
// }

// function Topics() {
//   let { path, url } = useRouteMatch();
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   )
// }

// function Topic() {
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   )
// }

// b. URL Parameter

// Param adalah placeholder di URL yang dimulai dengan titik dua, 
// seperti param ` : id` yang didefinisikan dalam route dalam contoh ini. 

// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Account</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/:id" children={<Child />} />
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// function Child() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   )
// }

// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Router exact path="/">
//             <Home />
//           </Router>
//           <Router path="/about">
//             <About />
//           </Router>
//           <Router path="/dashboard">
//             <Dashboard />
//           </Router>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   )
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   )
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   )
// }