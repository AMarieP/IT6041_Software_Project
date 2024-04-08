import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const handelLogout = () => {
        logout()
    }

    return (
        <nav style={styles.nav}>
            <Link to = "/Home" style={styles.title}>
                Sink
            </Link>
            <ul style={styles.ul}>
                <CustomLink to="/ViewStock">Stock</CustomLink>
                <CustomLink to="/ViewFandM">Frames And Matteboards</CustomLink>
                {user && <CustomLink to="/StockCreate">Add new stock</CustomLink>}
            </ul>
            {user && <button onClick={handelLogout}>logout</button>}
        </nav>
    )
}

const CustomLink = ( {to,children, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path : resolvedPath.pathname, end: true})

    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = styles.hoverLink.backgroundColor;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = isActive ? styles.activeLink.backgroundColor : 'inherit';
    };

    return (
        <li style={styles.li} className={isActive ? "active" : ""}>
            <Link 
                to={to} 
                style={isActive ? { ...styles.link, ...styles.activeLink } : styles.link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                {children}
            </Link>
        </li>
    )
}

export default Navbar

const styles = {
    nav:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
        width:'15%',
        height:'100vh',
        border:'2px solid black',
        paddingLeft:'10px',
        paddingTop:'10px',
        
    },
    title:{
        fontSize:'30px',
        textDecoration:'none',
        marginBottom:'20px',
        marginLeft:'5px',
    },
    ul:{
        padding:'0',
        margin:'0',
        listStyle: 'none',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
        width: '100%',
    },
    li:{
        width: '100%',
    },
    link:{
        display:'flex',
        textDecoration:'none',
        transition: 'background-color 0.3s ease',
        padding: '8px 0',
        width: '100%',
    },
    activeLink: {
        backgroundColor: 'grey', 
        width: '100%',
    },
    hoverLink: {
        backgroundColor: 'lightgray',
        width: '100%',
    },
    
    


}
