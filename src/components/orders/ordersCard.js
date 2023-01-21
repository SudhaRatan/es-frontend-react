import ProdCardB from "../productCard/productCardB"
import showDetails from "../../images/showDetails.png"
import { useState } from "react"

export default function OrdersCard(props) {

  const d = new Date(props.order.orderDate)
  const [toggle,setToggle] = useState(true)

  return (
    <div style={{
      position: "relative",
      padding: "10px",
      boxSizing: "border-box",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
        <span style={{
          fontSize: "18px",
          fontWeight: "500",
          flex: "1"
        }}>Ordered on {[(d.getDate()), (d.getMonth() + 1), d.getFullYear()].join('/')} at {d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
        </span>
        <div style={{
          padding: "2px 10px",
          cursor: "pointer",
          overflow:"hidden"
        }} onClick={() => setToggle(!toggle)}>
          <img style={{
            transform: toggle ? null : "rotate(180deg)"
          }} width="30" height="20" src={showDetails} alt="showStatus" />
        </div>
      </div>


      <div style={{
        position: "relative",
        overflowX: "auto",
        whiteSpace: "nowrap",
        textAlign: "center"
      }}>
        {
          props.order.productIds.map(prod => {
            return (
              <div style={{
                display: "inline",
              }} key={prod._id}>
                <ProdCardB small={true}
                  id={prod._id}
                  name={prod.name}
                  brand={prod.brand}
                />
              </div>
            )

          })
        }

      </div>
    </div>
  )
}