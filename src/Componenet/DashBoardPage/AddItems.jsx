import { useForm } from "react-hook-form";
import SecTitle from "../pages/SecTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxios from "../hooks/useAxios";
import swal from "sweetalert";

const image_hosting_key = import.meta.env.VITE_image_api;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
  const axiosSecure = useAxios();
  const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm()
  const onSubmit = async(data) => {
    console.log(data)
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
    if (res.data.success) {
      const menuItem = {
        name:data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      }
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data)
      if (menuRes.data.insertedId) {
        reset()
        swal("Good job!", "insertedId Successfully!", "success");

      }
    } 
    console.log('with img url',res.data)
  }
    return (
        <div>
            <SecTitle heading='add an item' subHeading='whats new?'></SecTitle>

           <div>
           <form onSubmit={handleSubmit(onSubmit)}>
    
<div  className="form-control w-full ">
  <label className="label">
    <span className="label-text">Recipe Name</span>
  </label>
  <input  {...register("name", {required:true})} 
   type="text" placeholder="Type here name" className="input input-bordered w-full " />
</div>

<div className="lg:flex gap-6 my-8">

<div  className="form-control w-full ">
  <label className="label">
    <span className="label-text">Category</span>
  </label>

      <select {...register('category', {required:true})} 
       className="select select-bordered w-full ">
        <option disabled value='default'>Select a category</option>
        <option value="salad">Salad</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="dessert">Dessert</option>
        <option value="drink">Drink</option>
</select>
</div>

<div  className="form-control w-full ">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input  {...register("price", {required:true})} 
   type="number" placeholder="Type here price" className="input input-bordered w-full " />
</div>
</div>

<div  className="form-control w-full ">
  <label className="label">
    <span className="label-text">Recipe Details</span>
  </label>
  <textarea {...register("recipe")}  placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
</div>

<div className="form-control w-full my-6">
<input   {...register("image", {required:true})}  type="file" className="   file-input file-input-bordered w-full max-w-xs" />
</div>

      <button className="btn btn-neutral"> Add Item  </button>
    </form>
           </div>
        </div>
    );
};

export default AddItems;