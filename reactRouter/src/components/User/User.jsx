import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
  return (
    <>
    <div className=" py-5 bg-slate-500 text-xl text-center">User: {userid} </div>
    </>
  )
}

export default User