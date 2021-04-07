import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './NavManu.css';

const NavManu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { displayName, email } = loggedInUser;

    return (
        <>
            <Navbar className="Nav-Manu fixed-top" expand="lg">
                <Container>
                    <Link to="/" className="navbar-brand logo nav-color">
                        Hat Bazar
                    </Link>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link nav-color">
                                Home
                            </Link>
                            <Link to="/orders" className="nav-link">
                                Orders
                            </Link>
                            <Link to="/admin" className="nav-link">
                                Admin
                            </Link>
                            <Link to="/deals" className="nav-link">
                                Deals
                            </Link>
                            {email ? (
                                <span className="user-name nav-link">
                                    {displayName || email}
                                </span>
                            ) : (
                                <Link
                                    to="/login"
                                    className="nav-link custom-btn"
                                >
                                    Login
                                </Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavManu;
