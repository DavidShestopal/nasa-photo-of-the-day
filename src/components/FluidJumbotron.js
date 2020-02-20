import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Fluid = props => {
  return (
    <Jumbotron>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">NASA</h1>
          <p className="lead">
            The National Aeronautics and Space Administration is an independent agency of the United States Federal
            Government responsible for the civilian space program, as well as aeronautics and aerospace research. NASA
            was established in 1958.
          </p>
        </Container>
      </Jumbotron>
    </Jumbotron>
  );
};

export default Fluid;
