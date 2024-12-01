import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-10">
                <h3 className="text-6xl font-bold">Page Not Found</h3>
                <p className="text-4xl text-red-600">404</p>
                <div className="mt-5">
                    <Link to="/" className="btn bg-[#9538E2] text-white">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;