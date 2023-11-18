import { Helmet } from 'react-helmet-async';
import Cover from '../Sheard/Cover';
import menuImg from '../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import useMenu from '../hooks/useMenu';
import SecTitle from './SecTitle';
import MenuItem from './MenuItem';
import MenuCategory from './MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category == 'dessert')
    const soup = menu.filter(item => item.category == 'soup')
    const salad = menu.filter(item => item.category == 'salad')
    const pizza = menu.filter(item => item.category == 'pizza')
    const offered = menu.filter(item => item.category == 'offered')

    return (
        <div className='mb-16'>
            <Helmet >
            <title>Bistro Boss | Menu</title>
            </Helmet>
            
            <Cover img={menuImg}
            title={'OUR MENU'}
            details={'Would you like to try a dish?'}
            ></Cover>
            {/* main cover */}
<SecTitle  heading={"TODAY'S OFFER"}
            subHeading={"Don't miss"} ></SecTitle>
            {/* offered */}
            <MenuCategory  items={offered}></MenuCategory>
            {/* desserts */}
            <MenuCategory items={desserts} 
            title='dessert'
            img={dessertImg}
            ></MenuCategory>

            <MenuCategory items={soup} 
            title='soup'
            img={dessertImg}
            ></MenuCategory>

            <MenuCategory items={salad} 
            title='salad'
            img={dessertImg}
            ></MenuCategory>

            <MenuCategory items={pizza} 
            title='pizza'
            img={dessertImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;