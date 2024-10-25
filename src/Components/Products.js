import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../rtk/slice/products';
// import { addToCart } from '../rtk/slice/cartSlice';
import { addToCart } from '../rtk/slice/cartSlice'


function Products() {
  let products = useSelector(state => state.products);
  // console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <Container>
        <Row>
            {products.map(product => (
            <Col key={product.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '300px', objectFit: 'contain'}} variant="top" src={product.image} alt="alternative text"/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text> {product.description}
                    </Card.Text>
                    <Button onClick={() => dispatch(addToCart(product))} variant="primary">Details</Button>
                </Card.Body>
            </Card>
            </Col>
            ))}
        </Row>
    </Container>
  );
}


export default Products;