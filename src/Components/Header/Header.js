import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
const Header = () => {
    const [loggedinUser, setLoggedinUser] =useContext(UserContext);

console.log(loggedinUser);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "80px" }}>
                <Navbar.Brand ><img style={{ height: "150px" ,width:'200px',marginBottom:'30px'}} src={logo} alt="" /><span style={{marginLeft: '230px',fontSize:'40px',fontStyle:'inherit'}}>Welcome to <span style={{color:'aqua'}}> KaKu Rider </span> App</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/signin">Destination</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/signin">
        
        
                        {loggedinUser.displayName ? loggedinUser.displayName :"Login"}


      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;