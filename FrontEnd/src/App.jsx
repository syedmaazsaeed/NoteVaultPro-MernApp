// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/notes/NoteState";
import "./index.css";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

// Context APIS : React App is built by combining state and Components together.
// Suppose hamary pas App.js  ha ya aik component ha is ka andar ham aur components ko
// banaty han ya hamara starting point hota ha suppose maray aik huge Ecommerce shop ha
// us shop ka behalf par blogs bhi write karta hn aur offers bhi deta hn . shop
// component tha shop component ka andaR BHI Component tha clothing ,food both
// are shop component and aur blog bhi mara component ha means App.js ka ..
// aur offers components bhi ha kon si offers kis user ko dany ha .. aur
// offers ka andar bhi mazeed component ha

// Components: Components are the fundamental building blocks of a React application. They can be functional or class-based and are responsible for rendering UI elements. Components can be nested within each other to create complex user interfaces.

// Props (Properties): Props are used to pass data from parent components to child components. They are read-only and help make your components reusable and dynamic. Props allow you to customize the behavior and appearance of your components.

// State: State is used to manage the internal data and state of a component. Unlike props, which are passed from parent to child, state is managed within the component itself. When the state of a component changes, React re-renders the component to reflect those changes.

// Lifecycle Methods (for class-based components): Class-based components have a set of lifecycle methods that you can override to perform actions at different stages of a component's life, such as mounting, updating, or unmounting. Some common lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount.

// Hooks (for functional components): In modern React, functional components can use hooks to manage state and side effects. Some commonly used hooks include useState for managing state, useEffect for handling side effects, and useContext for accessing context data.

// Router (React Router): React Router is a library for handling client-side routing in a React application. It allows you to define routes and navigate between different views or components based on the URL.

// Context: Context provides a way to share data between components without explicitly passing props through the component tree. It's often used for global state management.

// Redux (optional): Redux is a state management library that can be used to manage the global state of a React application. It provides a centralized store for data and allows you to dispatch actions to update that data.

// Styling: You can use various methods for styling your React components, including CSS, CSS-in-JS libraries like styled-components, or pre-processors like SASS.

// API Calls: React apps often make asynchronous API calls to fetch data from a server. You can use libraries like Axios or the built-in fetch API to handle these requests
