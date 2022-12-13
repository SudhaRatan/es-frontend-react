import "./components/homeStyle.css"
import { useNavigate } from "react-router-dom";

export const API = process.env.REACT_APP_API;

function App() {

  const navigate = useNavigate();

  return (

    <div className="Home">
      <div className="feat" onClick={() => navigate("/product")}>
        Featuring section
    </div>
      <div className="elec"></div>
      <div className="clothes"></div>
      <div className="toys"></div>
    </div>
  );
}

export default App;

