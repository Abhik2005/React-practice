import { useParams } from "react-router-dom"

function Abhik() {
  var {userid} = useParams()
  return (
    <div>abhik: {userid}</div>
  )
}

export default Abhik