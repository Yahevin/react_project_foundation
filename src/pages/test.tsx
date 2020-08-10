import React from "react";

interface AppProps {
    title: string;
}

function App(props: AppProps) {

  return (
      <h1>{props.title}</h1>
  )
}

export default App;