import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useCarts from "../hooks/useCarts";


const FoodCard = ({item}) => {
    const {name,image,price,recipe, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location  = useLocation();
    const axiosSecure = useAxios();
    const [, refetch] = useCarts();


     const handleAddToCart = () =>{
      
      if (user) {
        console.log(user.email,)
        const cartItem = {
          menuId: _id,
          email: user.email,
          name, 
          image, 
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res)
          if (res.data.insertedId) {
            swal("Good job!", "Carts add Successfully!", "success");
            refetch();
          }
        })
        .catch(error => console.log(error))
      }
      else{
        swal( "please login first");
        swal("Sorry!", "Please login first", "warning");
        navigate('/login', {state: {from: location}})
      }
     }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
    <p className="bg-slate-800 absolute rounded-md right-12 top-12 text-white"> ${price} </p>
  </figure>
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
    <div onClick={handleAddToCart} className=" my-8 text-center"><button className="btn btn-outline btn-secondary border-0 border-b-4">add to cart</button></div>

    </div>
  </div>
</div>
    );
};

export default FoodCard;