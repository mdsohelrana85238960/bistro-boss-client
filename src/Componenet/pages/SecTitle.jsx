

const SecTitle = ({heading, subHeading}) => {
    return (
        <div className=" my-16 md:w-4/12 text-center  mx-auto">
            <p className= "text-yellow-600 pb-2"> --- {subHeading} --- </p>
            <h1 className="text-3xl uppercase border-y-2 py-2"> {heading} </h1>
        </div>
    );
};

export default SecTitle;