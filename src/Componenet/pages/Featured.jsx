import SecTitle from "./SecTitle";
import featureImg from '../../../src/assets/home/featured.jpg'

const Featured = () => {
    return (

<div className="hero  bg-fixed min-h-screen" style={{ backgroundImage: `url(${featureImg})` }}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">

                  <div>
             <SecTitle heading={'FROM OUR FEATURED'}
            subHeading={'Check it out'} ></SecTitle>

            <div className="lg:flex justify-center items-center gap-8">
                <div> <img className="w-[500px] m-auto  h-[350px]" src={featureImg} alt="" /> </div>
                <div className="flex-1  text-left">
                <h1 className="text-white text-2xl mb-2">March 20, 2023</h1> 
                     <h1 className="mb-2 text-xl text-white">WHERE CAN I GET SOME?</h1> 
                     
                     <p className="text-white mb-2 w-[500px] ">

Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p> <button className="btn btn-outline btn-secondary border-0 border-b-4">Secondary</button>
                     </div>
            </div>

        </div>
        </div>
      </div>
    </div>


    );
};

export default Featured;