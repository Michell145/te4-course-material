import CardComponent from "./components/card/card.component";

function App() {
  return (
    <div className="app">
      <CardComponent
        description="Frank i need this, I'm kinda homeless!"
        title="Homeless Frank"
        imgUrl="https://placehold.co/600x400"
      />
      <h1>Vite + React + michell</h1>
    </div>
  );
}

export default App;
