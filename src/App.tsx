import "./App.css";
import Nav from "./components/nav/Nav";
import Feed from "./components/feed/Feed";

function App() {

  return (

    <div className="app">

      <Nav />

      <main className="main-content">
        <Feed />
      </main>

    </div>

  );
}

export default App;