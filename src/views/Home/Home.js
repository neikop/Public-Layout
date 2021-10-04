import { Col, Row, Spin } from 'antd';

const Home = () => {
  return (
    <div>
      <Spin spinning={true}>
        <Row className='bg-red-800 my-10' style={{ height: 240 }}>
          <Col>HOME</Col>
        </Row>
      </Spin>
    </div>
  );
};

export default Home;
