import HomeGradient from "./components/HomeSection/HomeGradient";
import HomeMain from "./components/HomeSection/HomeMain";
import SubHome from "./components/HomeSection/SubHome";
import NavbarMain from "./components/navbar/NavbarMain";


function App() {
  return ( 
  <main className="font-body">
    <NavbarMain/>
    <HomeMain/>
    <HomeGradient/> 
    <SubHome/>
  </main>
  );
}

export default App;
