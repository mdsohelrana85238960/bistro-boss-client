import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { FaTrashAlt, FaUsers } from "react-icons/Fa";
import Swal from "sweetalert2";
import swal from "sweetalert";


const AllUsers = () => {
    
    const axiosSecure = useAxios();
    const {data: users = [],refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDeleteUser = (user) =>{
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
            
            axiosSecure.delete(`/users/${user}`)
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

    const handleMakeAdmin = (user) =>{
        axiosSecure.patch(`/users/admin/${user}`)
        .then(res =>{
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
                refetch();
                swal("Good job!", "Update Successfully!", "success");
            }
        })
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h1 className="text-3xl">All users </h1>
                <h1 className="text-3xl">Total users: {users.length} </h1>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Acton</th>
      </tr>
    </thead>
    <tbody>
    
    {
        users.map((user, index) =>   <tr key={user._id}>
            <th>{index +1} </th>
            <td> {user.name} </td>
            <td>{user.email}</td>
            
            <td>
                {
                    user.role === 'admin' ? <> <h1 className="text-blue-500 font-bold">Admin</h1> </> :
                    <button onClick={() => handleMakeAdmin(user._id)} className="btn bg-orange-200 text-blue-600 btn-ghost text-2xl btn-lg">
                    <FaUsers></FaUsers>
                  </button>
                }
                </td>
            <td>
                  <button onClick={() => handleDeleteUser(user._id)} className="btn text-red-600 btn-ghost btn-lg">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
          </tr>)
    }

    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;