import React from 'react'
import { Jumbotron, Button } from 'reactstrap'

const JumbotronApp = props => {
  return (
    <React.Fragment>
      <Jumbotron>
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">
          This is a simple social network created for react tutorial in Computer
          Engineering RMUTT.
        </p>
        <hr className="my-2" />
        <p>Click button below for go to FB: CPE RMUTT.</p>
        <p className="lead">
          <a href="https://www.facebook.com/ComputerEngineeringRmutt/">
            <Button color="primary">Go to CPE</Button>
          </a>
        </p>
      </Jumbotron>
    </React.Fragment>
  )
}

export default JumbotronApp
