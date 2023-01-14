import { useNavigate,Link } from "react-router-dom"
import "./style.css"
import st from "./style"
import { useState } from "react"
import logo from "./nav-logo.png"

function Navb() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const modalHandle = () => {
        setShowModal(!showModal)
    }
    // useEffect(() => {
    //     if (parentRef.current) {
    //       autoAnimate(parentRef.current);   
    //     }
    //   }, [parentRef])
    return (
        <div style={st.cont}>
            <div style={st.navbar}>
                <div className="nav" onClick={() => { navigate("/"); setShowModal(false) }} style={st.nav}>
                    <div style={st.nav_link}>
                        WebName
                    </div>
                </div>
                {/* <div className="nav" onClick={() => {navigate("/login");setShowModal(false)}} style={st.nav}>
                    <div style={st.nav_link}>
                        Login
                    </div>
                </div>
                <div className="nav" onClick={() => {navigate("/cart");setShowModal(false)}} style={st.nav}>
                    <div style={st.nav_link}>
                        Cart
                    </div>
                </div> */}
                <div className="nav" onClick={() => {setShowModal(false) }} style={{
                    backgroundColor: "#202124",
                    color: "#fff",
                    padding:"12px"
                }}>
                    <div>
                        <input style={{
                            width:"100%",
                            height:"30px",
                            backgroundColor:"#00000030",
                            border:"1px solid grey",
                            borderRadius:"10px",
                            color:"#fff",
                            fontSize:"20px",
                        }} type="text" />
                    </div>
                </div>
                <div className="nav" onClick={modalHandle} style={{
                    backgroundColor: "#202124",
                    color: "#fff",
                    padding: "10px 10px 0 0",
                }}>
                    <div style={{display:"grid",justifyContent:"flex-end",cursor:"pointer",}}>
                        <img width={40} height={40} src={logo} alt="nav" />
                    </div>
                </div>
            </div>
            {
                showModal ? (
                    <div visible='false' style={style.modal}>
                        <ul className="navbar">
                            <Link onClick={()=>{setShowModal(false)}} to="/" className="nav-link">Home</Link>
                            <Link onClick={()=>{setShowModal(false)}} to="/orders" className="nav-link">Orders</Link>
                            <Link onClick={()=>{setShowModal(false)}} to="/cart" className="nav-link">Cart</Link>
                            <Link onClick={()=>{setShowModal(false)}} to="/products" className="nav-link">Your Products</Link>
                            <Link onClick={()=>{setShowModal(false)}} to="/account" className="nav-link">Account</Link>
                           {
                                localStorage.getItem('token') ? (
                                    <li onClick={()=>{setShowModal(false);localStorage.removeItem('token');navigate("/")}} className="nav-link">Logout</li>
                                ) : (
                                    <li onClick={()=>{setShowModal(false);navigate("/login");}} className="nav-link">Login</li>
                                )
                            }
                            
                        </ul>
                    </div>
                ) : (null)
            }


        </div>
    );
}

export default Navb;


const style = {
    modal: {
        margin: "60px 0px 0px 0px",
        width: "100vw",
        height: "100vh",
        display: "grid",
        position: "fixed",
        backgroundColor: "#00000099",
        color: "white",
        backdropFilter: "blur(10px)",
        alignItems: "",
        textAlign: "right",
        zIndex:"10",
    }
}