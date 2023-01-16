import add from ".././images/add.png"
import { Link } from "react-router-dom";
import "./style.css"

export default function AddressCard() {


  const addresses = [
    {
      country: "India",
      fullName: "Ratan kumar",
      phoneNumber: 123123123,
      address: "qweqweqwe qdfdvkjsbnkj ergkjerngvjeng ejkbnlsbns",
      city: "jeypore",
      state: "Odisha",
      zip: 764001
    },
    {
      country: "India",
      fullName: "Ratan kumar",
      phoneNumber: 123123123,
      address: "qweqweqwe qdfdvkjsbnkj ergkjerngvjeng ejkbnlsbns",
      city: "jeypore",
      state: "Odisha",
      zip: 764001
    },
    {
      country: "India",
      fullName: "Ratan kumar",
      phoneNumber: 123123123,
      address: "qweqweqwe qdfdvkjsbnkj ergkjerngvjeng ejkbnlsbns",
      city: "jeypore",
      state: "Odisha",
      zip: 764001
    },
    {
      country: "India",
      fullName: "Ratan kumar",
      phoneNumber: 123123123,
      address: "qweqweqwe qdfdvkjsbnkj ergkjerngvjeng ejkbnlsbns",
      city: "jeypore",
      state: "Odisha",
      zip: 764001
    },
    {
      country: "India",
      fullName: "Ratan kumar",
      phoneNumber: 123123123,
      address: "qweqweqwe qdfdvkjsbnkj ergkjerngvjeng ejkbnlsbns",
      city: "jeypore",
      state: "Odisha",
      zip: 764001
    },
  ]

  return (
    <div style={{
      width: "100vw",
      // backgroundColor: "#fff000",
      height: "fit-content",
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <div style={style.cardCont}>

        <div >
          {
            addresses && addresses.map(address => {
              return (
                <div style={style.txt}>
                  <p><b>{address.fullName}</b></p>
                  <p>{address.address}</p>
                  <p>{address.city}, {address.state}, {address.zip}</p>
                  <p>{address.country}</p>
                  <p>Phone number : {address.phoneNumber}</p>
                </div>
              )
            })
          }
          <Link className="addAddress" to="/account/addAddress">
            <div style={style.txt1}>
              <img style={{
                boxShadow: "1px 1px 5px #80808080",
                borderRadius: "25px",
                width: "40px",
                cursor: "pointer",
              }} src={add} alt="Add button"
              />
              <div style={{
                fontSize: "24px",
                // backgroundColor: "#fff000",
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}>Add address</div>
            </div>
          </Link>

        </div>

      </div>
    </div>
  )
}

const style = {
  cardCont: {
    margin: "10px",
    width: "95%",
    borderRadius: "10px",
    border: "1px solid #808080",
    boxShadow: "1px 1px 10px 1px #00000080",
    maxWidth: "800px",
  },
  txt: {
    borderBottom: "1px solid #808080",
    padding: "20px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  txt1: {
    borderBottom: "1px solid #808080",
    padding: "20px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
}
