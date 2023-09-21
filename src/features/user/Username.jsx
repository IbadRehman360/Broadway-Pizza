import { useSelector } from "react-redux";

function Username() {
  const user = useSelector((store) => store.user.username)

  if (!user) return
  return <div className="hidden text-sm font-semibold md:block">{user} </div>;
}

export default Username;
