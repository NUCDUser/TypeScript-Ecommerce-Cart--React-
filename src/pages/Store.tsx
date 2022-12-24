import { Col, Row, Container } from 'react-bootstrap'
import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'

const Store = () => {
  return (
    <Container>
      <h1>Store</h1>
      <Row xs={1} md={2} sm={1} lg={3} className='g-3'>
        {storeItems.map(item => (
          <Col key={item.id}><StoreItem {...item} /></Col>
        ))}
      </Row>
    </Container>
  )
}

export default Store