import { useParams } from "react-router-dom";

const User = () => {
    const {id} = useParams();

    return (
        <div className="bg-green-100 min-h-screen flex justify-center items-center">User ID: {id}</div>
    );
};

export default User;