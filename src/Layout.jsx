import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: 'black', fontFamily: "Playwrite GB S cursive" }}>
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: 'white' }}>Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'white' }} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* Links styled with consistent color and hover effects */}
                            <Link to="display" style={styles.link}>Display</Link>
                            <Link to="Insert" style={styles.link}>Insert</Link>
                            <Link to="Edit" style={styles.link}>Edit</Link>
                            <Link to="search" style={styles.link}>Search</Link>
                            <Link to="searchbyname" style={styles.link}>Search by Name</Link>


                            {/* Corrected NavDropdown */}
                            <NavDropdown title="More" id="navbarScrollingDropdown" menuVariant="dark">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled style={{ color: 'grey' }}>
                                Link
                            </Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <center >
                 <div style={{marginBottom:"20px"}}></div>
                <div >
                <Outlet />
                </div>
                
                <hr color="red" size="4" />
                www.mywebsite.com
            </center>
        </>
    );
}

const styles = {
    link: {
        color: 'white',
        textDecoration: 'none',
        marginRight: '20px',
        padding: '8px',
        borderRadius: '5px',
        transition: '0.3s',
        fontWeight: '500',
    },
    linkHover: {
        backgroundColor: '#444',
    },
};

export default Layout;
