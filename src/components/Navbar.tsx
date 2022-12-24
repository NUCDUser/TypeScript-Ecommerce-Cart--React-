import {Container, Nav, Button, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import ShoppingCartIcon from '../assets/ShoppingCartIcon'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
    const {openCart, cartQuantity} = useShoppingCart()
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
                <Button style={{position: 'relative'}} size='sm'  variant='outline-primary' className='rounded-circle' onClick={openCart}>
                    <ShoppingCartIcon />
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                        {cartQuantity}
                        <span className='visually-hidden'>items in cart</span>
                    </span>
                </Button>
            )}
        </Container>
    </NavbarBs>
  )
}

export default Navbar