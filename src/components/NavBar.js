
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = ({ currentUser }) => {

  return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">Watchables List</Navbar.Brand> */}
                <Navbar.Brand href="/">🍿 Watchables List</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/watchables-list">Watchables List</Nav.Link>
                        <Nav.Link href="/add">Add a Watchable</Nav.Link>
                        <Nav.Link href="/favorites">View Favorites</Nav.Link>
                    </Nav>

                    <Nav>
                        <NavDropdown title="" id="collasible-nav-dropdown">
                            {
                                currentUser
                                ?
                                <NavDropdown.Item href="/add">Add a Watchable</NavDropdown.Item>
                                :
                                <NavDropdown.Item href='/watchables-list'>List</NavDropdown.Item>
                            }
                            <NavDropdown.Item href="/account">My account</NavDropdown.Item>

                            <NavDropdown.Divider />

                            {
                                currentUser
                                ?
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                                :
                                <NavDropdown.Item href='/login'>Login</NavDropdown.Item>
                            }






                        </NavDropdown>

                        <Navbar.Text>
                            {currentUser ? `Hello, ${currentUser.username}` : 'Login'}
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
