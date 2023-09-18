import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData()
  return (
    <>
      <h1>Menu</h1>;
      <ul>
        {menu.map((pizza => <MenuItem pizza={pizza} key={menu.id} />))}
      </ul>
    </>
  )
}

export default Menu;


export async function Loader() {
  const menu = await getMenu()
  return menu;

}

