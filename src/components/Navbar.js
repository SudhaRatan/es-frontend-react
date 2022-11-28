import {useNavigate} from "react-router-dom"
import "./style.css"
import st from "./style"

function Navb() {

    const navigate = useNavigate()

    return (
        <div style={st.cont}>
            <div style={st.navbar}>
                <div className="nav" onClick={()=>navigate("/")} style={st.nav}>
                    <div  style={st.nav_link}>
                        WEbName
                    </div>
                </div>
                <div className="nav" onClick={()=>navigate("/login")} style={st.nav}>
                    <div style={st.nav_link}>
                        Login
                    </div>
                </div>
                <div className="nav" onClick={()=>navigate("/cart")} style={st.nav}>
                    <div style={st.nav_link}>
                        Cart
                    </div>
                </div>
                <div className="nav" style={st.nav}>
                    <div style={st.nav_link}>
                        Home
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navb;


