import React from "react";
import useListeCek from "./useListeCek";


function App() {
  const [veri, veriGuncelle] = useListeCek("https://jsonplaceholder.typicode.com/todos")

  return (
    <>
      <ol>
        { veri && veri.map( (is)=> {
          return <li key={is.id}>{is.title}</li>
        } ) }
      </ol>
      
    </>
  );
}

export default App;


