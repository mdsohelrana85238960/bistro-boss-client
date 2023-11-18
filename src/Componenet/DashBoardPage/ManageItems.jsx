import { FaPenAlt, FaTrashAlt,  } from "react-icons/Fa";
import SecTitle from "../pages/SecTitle";
import useMenu from "../hooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";



const ManageItems = () => {
  const axiosSecure = useAxios();
    const [menu, loading ,refetch] = useMenu();

    const handleUpdate = (item) =>{
        console.log('first')
    }

    const handleDelete = (item) =>{
      
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
        
        axiosSecure.delete(`/menu/${item}`)
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
            <SecTitle heading={'Manage All Item'} subHeading={'Hurry up'}></SecTitle>

<div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            menu.map((cart, index) => <tr key={cart._id}>
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
                <td>
                <Link to={`/dashboard/UpdateItems/${cart._id}`} >
                <button onClick={() => handleUpdate(cart._id)} className="btn bg-orange-200 text-blue-600 btn-ghost text-xl btn-lg">
                <FaPenAlt />
                  </button>
                </Link>
                  </td>
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

export default ManageItems;