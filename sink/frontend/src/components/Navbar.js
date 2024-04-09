import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'
import { useState,useEffect } from "react";
import ButtonBlack from "./buttons/buttonBlack";

const Navbar = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const handelLogout = () => {
        logout()
    }

    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
          setHasScrolled(true);
        } else {
          setHasScrolled(false);
        }
      };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <nav style={{ ...styles.nav, ...(hasScrolled && styles.navScrolled) }}>
            <Link to = "/Home" style={styles.title}>
                Sink
            </Link>
            <ul style={styles.ul}>
                <CustomLink to="/ViewStock">Stock</CustomLink>
                <CustomLink to="/ViewFandM">Frames And Matteboards</CustomLink>
                {user && <CustomLink to="/StockCreate">Add new stock</CustomLink>}
            </ul>
            <div style={styles.logoutButton}>
                {user && <ButtonBlack onClick={handelLogout} >Logout</ButtonBlack>}
            </div>
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
        width:'20%',
        height:'100vh',
        border:'2px solid black',
        paddingTop:'10px',
        position: "fixed",
    },
    navScrolled: {
        position: "fixed",
    },
    title:{
        fontSize:'30px',
        textDecoration:'none',
        marginBottom:'20px',
        marginLeft:'5px',
        color:'black',
        alignSelf:'center',
    },
    ul:{
        padding:'0',
        margin:'0',
        listStyle: 'none',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'flex-end',
        width: '100%',
    },
    li:{
        width: '100%',
        textAlign: 'right',
    },
    link:{
        display:'flex',
        justifyContent: 'flex-end',
        alignItems:'center',
        textDecoration:'none',
        transition: 'background-color 0.3s ease',
        padding: '8px 10px',
        width: 'calc(100% - 20px)',
        color:'black',
    },
    activeLink: {
        backgroundColor: 'black', 
        width: 'calc(100% - 20px)',
        color: 'white'
    },
    hoverLink: {
        backgroundColor: 'lightgray',
        width: 'calc(100% - 20px)',
    },
    logoutButton: {
        display:'flex',
        flexDirection:'column',
        marginTop:'auto'
    },
    
    


}
