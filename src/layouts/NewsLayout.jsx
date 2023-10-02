import Header from '../pages/share/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/share/RightNav/RightNav';
import Footer from '../pages/share/Footer/Footer';

const NewsLout = () => {
    return (
        <div>
            
              <Header></Header>
          <Container>
                
                <Row>
                    <Col lg={9}>
                     <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                    <RightNav></RightNav>
                    </Col>
                </Row>
          </Container>

          <Footer></Footer>
        </div>
    );
};

export default NewsLout;