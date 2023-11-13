import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
            <div>Main</div>
            <div className=" flex gap-8">
                
                <Link to="a">a</Link>
                <Link to="b">b</Link>
                <Link to="c">c</Link>
                
            </div>

        </div>
    
    
        );
};

export default Main;