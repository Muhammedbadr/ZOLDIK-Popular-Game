const Containers = (props) => {
    return (
        <div className="flex justify-center    h-full ">
            <div className="container  rounded-3xl py-10 pb-16 px-8 bg-[#141d2f]">
                {props.children}
            </div>
        </div>
    );
}


export default Containers;
