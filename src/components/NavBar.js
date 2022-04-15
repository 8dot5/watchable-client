import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/NavBar.css'

function NavBar({ currentUser }) {
  return (
	<Navbar bg='white' variant='light' fixed='top' collapseOnSelect expand='lg'>
		<Container>
			<Navbar.Brand href='/'>
				<img
					src='https://m.psecn.photoshelter.com/img-get2/I00003.7n2uqN.bM/fit=1000x750/g=G00003tyCpRF.qOc/apple-touch-icon.jpg'
					width='30'
					height='30'
					className='d-inline-block align-top'
					alt='Watchables logo'
				/>{''} Watchables
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='me-auto'>
					<Nav.Link href='/watchables-list'>Watchables List</Nav.Link>
					<Nav.Link href='/add'>Add a Watchable</Nav.Link>
					<Nav.Link href='/favorites'>View Favorites</Nav.Link>

					{/* Conditional rendering nav items; commented this out because Nav items flashing upon page reloads */}
					{/* {
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
					} */}
				</Nav>

				//TODO functional account page doesn't exist thus link is disabled
				<Nav>
					<Navbar.Text>
						{currentUser ? `Hi, ${currentUser.username}` : <a href='/login'>Login</a>}
					</Navbar.Text>
					{
						currentUser
						?
						<NavDropdown>
							<NavDropdown.Item href='/add'>Add a Watchable</NavDropdown.Item>
							<NavDropdown.Item href='/account' disabled>My account</NavDropdown.Item>
							<NavDropdown.Divider/>
							<NavDropdown.Item href='/logout'>Logout</NavDropdown.Item>
						</NavDropdown>
						:
						null
					}
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
	);
};

export default NavBar;
