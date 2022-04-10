import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../styles/NavBar.css'

//TODO add logo
function NavBar({ currentUser }) {
  return (
	<Navbar bg='dark' variant='dark' fixed='top' collapseOnSelect expand='lg'>
		<Container>
			<Navbar.Brand href='/'>🍿 Watchables
				{/* <img
					src='https://c.tenor.com/88dnH_mHRLAAAAAC/static-tv-static.gif'
					width='30'
					height='30'
					className='d-inline-block align-top'
					alt='watchables logo'
				/> */}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>

				<Nav className='me-auto'>
					<Nav.Link href='/watchables-list'>Watchables List</Nav.Link>
					{
						currentUser
						?
						<Nav.Link href='/add'>Add a Watchable</Nav.Link>
						:
						null
					}
					{
						currentUser
						?
						<Nav.Link href='/favorites'>View Favorites</Nav.Link>
						:
						null
					}
				</Nav>

				<Nav>
					{
						currentUser
						?
						<NavDropdown>
							<NavDropdown.Item href='/add'>Add a Watchable</NavDropdown.Item>
							<NavDropdown.Item href='/account'>My account</NavDropdown.Item>
							<NavDropdown.Divider/>
							<NavDropdown.Item href='/logout'>Logout</NavDropdown.Item>
						</NavDropdown>
						:
						null
					}
					<Navbar.Text>
						{currentUser ? `Hi, ${currentUser.username}` : <a href='/login'>Login</a>}
					</Navbar.Text>
				</Nav>

			</Navbar.Collapse>
		</Container>
	</Navbar>
	);
};

export default NavBar;
