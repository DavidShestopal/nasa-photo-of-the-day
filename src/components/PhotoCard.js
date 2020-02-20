import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row } from 'reactstrap';

const PhotoCard = props => {
  return (
    <div>
      <Container>
        <Row>
          <Card>
            <CardImg top width="100%" src={props.imageurl} alt="Card image cap" />
            <CardBody>
              <CardTitle>
                {' '}
                <h2>{props.title}</h2>
              </CardTitle>
              <CardSubtitle>{props.date}</CardSubtitle>
              <CardText>{props.explanation}</CardText>
              <Button href="https://github.com/DavidShestopal">GitHub</Button>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default PhotoCard;
