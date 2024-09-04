import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div className="notfound">
        <h1>Sorry</h1>
        <h5>Page not found</h5>
        <Link to="/">Go To Home Page</Link>
        </div>
    );
}
 
export default NotFound;