

const MenuItem = ({item}) => {
    const {image,name,price,recipe} = item;
    return (
      
         <div className="flex  ">
            <img style={{borderRadius: '0 190px 190px 190px'}} className="w-[110px]   mr-4" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-----------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-700"> ${price} </p>
           
        </div>
        
      
    );
};

export default MenuItem;