import "./app.css";
import HomeGradient from "./components/HomeSection/HomeGradient";
import HomeMain from "./components/HomeSection/HomeMain";
import NavbarMain from "./components/navbar/NavbarMain";


function App() {
  return ( 
  <main className="font-body">
    <NavbarMain/>
    <HomeMain/>
    <HomeGradient/> 
  </main>
  );
}

export default App;
