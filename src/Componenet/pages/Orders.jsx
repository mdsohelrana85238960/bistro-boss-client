import { useState } from 'react';
import orderImg from '../../../src/assets/menu/banner3.jpg'
import Cover from '../Sheard/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import FoodCard from './FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Orders = () => {
   const categories = ['salad','pizza','dessert','soup','drinks'];
   const {category} = useParams();
   const initialIndex = categories.indexOf(category)
    const [menu] = useMenu();
    const [tabIndex,setTabIndex] = useState(initialIndex);
    
    const dessert = menu.filter(item => item.category == 'dessert')
    const soup = menu.filter(item => item.category == 'soup')
    const salad = menu.filter(item => item.category == 'salad')
    const pizza = menu.filter(item => item.category == 'pizza')
    const drinks = menu.filter(item => item.category == 'drinks')
   
    console.log(category)

    return (
        <div>
             <Helmet >
            <title>Bistro Boss | Order Foods</title>
            </Helmet>
            <Cover img={orderImg} title={'Order foods'}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Supe</Tab>
    <Tab>Desserts</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
    </div>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Orders;