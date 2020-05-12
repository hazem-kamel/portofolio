import React from "react";
import NavBar from "./components/navbar/navbar";
import Routes from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}
export default App;
