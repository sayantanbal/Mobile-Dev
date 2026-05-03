
// import { useState } from "react";

// function App() {
//   const [state, setState] = useState(0); // top level state, that means it will be shared across all the components, and when it changes, it will cause all the components to re-render, even if they don't use that state, which is not efficient.

//   return (
//     <>
//       <h1>{state}</h1>
//       <button onClick={() => setState(state + 1)}>+</button>
//       <button onClick={() => setState(state - 1)}>-</button>
//     </>
//   );
// }

// export default App;









import { use, useEffect, useState } from "react";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect w/o dependency array
  //  will run after every render, which is not efficient, because it will cause unnecessary side effects, and it will also cause infinite loops if the side effect changes the state that causes the component to re-render.
  useEffect(() => {
    console.log("useEffect 1 called")
  });


  // useEffect with empty dependency array
  // will run only once, after the first render, which is efficient, because it will not cause unnecessary side effects, and it will not cause infinite loops.
  useEffect(() => {
    console.log("useEffect 2 called")
  }, []);


  // useEffect with dependency array
  // will run only when the dependencies change, which is efficient, because it will not cause unnecessary side effects, and it will not cause infinite loops.
  useEffect(() => {
    console.log("useEffect 3 called")
  }, [isDarkMode]);

  return (
    <div 
    style = {{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "200rem",
      }}
    >
     <button onClick={() => setIsDarkMode(!isDarkMode)}>
      Toggle theme
      </button>
      
      
    </div>
  );
}

export default App;