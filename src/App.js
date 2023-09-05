import Index from "./Components/Index"; 
import Layout_sidenav_light from "./Components/Layout_sidenav_light";
import Layout_static from "./Components/Layout_static";
import Login from "./Components/Login";
import Password from "./Components/Password";
import Register from "./Components/Register";
import Tables from "./Components/Tables";
import Charts from "./Components/Charts";
import E500 from "./Components/E500";
import E404 from "./Components/E404";
import E401 from "./Components/E401";
function App() {
  return (
    <div>
      <Index></Index>
      <Layout_sidenav_light></Layout_sidenav_light>
      <Layout_static></Layout_static>
      <Login></Login>
      <Password></Password>
      <Register></Register>
      <Tables></Tables>
      <Charts></Charts>
      <E500></E500>
      <E404></E404>
      <E401></E401>
    </div>
  );
}

export default App;
