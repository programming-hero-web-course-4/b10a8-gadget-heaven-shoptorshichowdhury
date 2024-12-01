const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col justify-center items-center space-y-4 text-white">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="w-3/5 text-center">{subtitle}</p>
        </div>
    );
};

export default Heading;