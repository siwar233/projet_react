import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { verif } from '../config/authentification';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Naavbar() {
  const authUser=verif()
  const navigate=useNavigate()
  function handleLogout(){
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={""}>
            <img src="/logo.png" alt="Logo" style={{
            width: '125px',   
            height: 'auto',  
            marginRight: '10px', 
            }}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/boutique"}>Boutique</Nav.Link>
              <Nav.Link as={Link} to={"/propos"}>A propos</Nav.Link>
              
            </Nav>
            <Nav className="">
              {authUser ? (
                <>
                  <Nav.Link as={Link} to={"/contact"}>contact</Nav.Link>
                  <Nav.Link style={{marginTop:13}}>{authUser.email}</Nav.Link>
                  <Nav.Link as={Link} to={"/panier"}>
                    <img
                      src="/panier2.png"
                      alt="Logo"
                      style={{
                        width: '50px',
                        height: 'auto',
                        marginRight: '10px',
                      }}
                    />
                  </Nav.Link>
                  <Button style={{marginLeft:250}} onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to={"/register"}>
                    S'inscrire
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/login"}>
                    Se connecter
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Naavbar;
