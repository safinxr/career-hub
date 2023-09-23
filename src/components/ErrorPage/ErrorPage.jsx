import { Link } from "react-router-dom";

export default function ErrorPage() {
    return(
        <div>
            <h1>oops....</h1>
            <Link to='/' className="btn btn-ghost">Go back to home</Link>
        </div>
    )
};
