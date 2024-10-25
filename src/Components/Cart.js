import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table } from 'react-bootstrap';
import { deleteFromCart } from "../rtk/slice/cartSlice";
import { clear } from "../rtk/slice/cartSlice";

function Cart () {
    let carts = useSelector(state => state.cart)
    let totalPrices= carts.reduce((acc, item) => {
        return acc += item.price 
    }, 0)
    let i = 1;
    let dispatch = useDispatch()
    return (
        <Container>
            <Button variant="primary" onClick={() => dispatch(clear())}>Clear All Products</Button>
            <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Deleting</th>
            </tr>
        </thead>
        <tbody>
        {carts.map(item => (
        <tr key={item.id}>
            <td>{i++}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            {/* <td><img src={item.image}></img></td> */}
            <td>{item.price}$</td>
            <td>{item.quantity}</td>
            <td><Button onClick={() => dispatch(deleteFromCart(item))} variant="danger">Delet</Button></td>
        </tr>           
        ))}
        </tbody>
    </Table>
    <h3>Total Price: {totalPrices}$</h3>
        </Container>
    )
}   

export default Cart;