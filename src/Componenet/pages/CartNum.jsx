import SecTitle from "./SecTitle";
import img5 from '../../../src/assets/home/05.png';

const CartNum = () => {
    return (
        <div>
            

            <div className=" my-16 bg-black text-center ">
            <h1 className="text-white text-4xl py-20">Call us : +01701965079</h1>
          </div>

          <div>
                <SecTitle heading={'CHEF RECOMMENDS'}
                subHeading={'---Should Try---'}></SecTitle>

                <div className=" text-center md:flex gap-8">
                <div className="card mx-auto w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img5} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-primary">add to cart</button>
    </div>
  </div>
</div>
                <div className="card mx-auto w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img5} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-primary">add to cart</button>
    </div>
  </div>
</div>
                <div className="card mx-auto w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img5} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-primary">add to cart</button>
    </div>
  </div>
</div>
                </div>
          </div>



        </div>
    );
};

export default CartNum;