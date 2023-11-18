
import SecTitle from "./SecTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";




const PopularManu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == 'popular')
 
    return (
        <div >
          <section className="mb-16">
          <SecTitle heading={'FROM OUR MENU'}
            subHeading={'Check it out'} ></SecTitle>

            <div className="grid md:grid-cols-2 gap-12">
                {
                    popular.map(item => <MenuItem key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
            <div className=" my-8 text-center"><button className="btn btn-outline btn-secondary border-0 border-b-4">View Full  Menu</button></div>
          </section>

         

          
        </div>
    );
};

export default PopularManu;