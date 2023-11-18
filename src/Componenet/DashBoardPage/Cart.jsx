import { FaTrashAlt } from "react-icons/Fa";
import useCarts from "../hooks/useCarts";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";


const Cart = () => {
    const [carts,refetch] = useCarts();
    // console.log(carts)
    const axiosSecure = useAxios();

    const totalPrice = carts.reduce((total,item) => total + item.price, 0)
    //  console.log(totalPrice)

     const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/carts/${id}`)
            .then(res =>{
                console.log(res);
                if (res.data.deletedCount>0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            } )
            }
          });
     }



    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-3xl">Items: {carts.length} </h1>

                <h1 className="text-3xl">Price: {totalPrice} </h1>

                <button className="btn btn-primary"> Pay</button>
            </div>

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            carts.map((cart, index) => <tr key={cart._id}>
                <th>
                 {index+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                   
                  </div>
                </td>
                <td>
                <div className="font-bold"> {cart.name} </div>
                </td>
                <td>${cart.price}</td>
                <th>
                  <button onClick={() => handleDelete(cart._id)} className="btn text-red-600 btn-ghost btn-lg">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>)
        }
      
   
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Cart;