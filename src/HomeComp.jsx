import React from 'react'
import {Container,Row,Col, Image} from "react-bootstrap"
import IMG from "./assets/b.jpeg"

const HomeComp = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={6} sm={12}>
           <p>
            Do You have extra artime and you would like to convert some of 
            it to money ?, C TO M got you.</p>
            <p>
            Do you want to purchase artime at discounted price ?,C TO M got you to.
           </p>
        </Col>
        <Col md={6} sm={12}>
          <Image src={IMG} alt="b" width={'500px'}/>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeComp