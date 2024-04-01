import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="nav">
            <Link to = "/" className="Title">
                Sink
            </Link>
            <ul>
                <CustomLink to="/ViewStock">Stock</CustomLink>
                <CustomLink to="/ViewFandM">Frames And Matteboards</CustomLink>
            </ul>
    </nav>
    )
}

const CustomLink = ( {to,children, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path : resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar

