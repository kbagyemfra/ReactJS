import GlobalContextProvider from "./context/global";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Home />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
