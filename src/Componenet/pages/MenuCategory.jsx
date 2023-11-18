import Cover from "../Sheard/Cover";
import MenuItem from "./MenuItem";
import menuImg from '../../../src/assets/menu/banner3.jpg'
import { Link } from "react-router-dom";

const MenuCategory = ({items,title,img}) => {
    return (
        <div>
             {title &&  <Cover img={img}
                title={title}
                
            ></Cover>}
            <div className="grid md:grid-cols-2 mt-16 gap-12">
                {
                    items.map(item => <MenuItem key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
            <Link to={`/orders/${title}`}><div className=" my-8 text-center"><button className="btn btn-outline btn-secondary border-0 border-b-4">Order Now</button></div>
 </Link>
        </div>
    );
};

export default MenuCategory;