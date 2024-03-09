import { Link, useNavigate } from "react-router-dom"

function LinkButton({children, to}) {
    const navigate = useNavigate();
    if(to==='-1')
    return   <button onClick={() => navigate(-1)}>{children}</button>
    return (
        <Link to={to} className="text-blue-500 hover:underline  hover:text-blue-600 text-sm" to="/menu">
            {children}
        </Link>
    )
}

export default LinkButton
