import React from 'react';
import { Card } from 'react-bootstrap';

export const Smurf = (smurf) => {
    
      return(
        <div data-testid="smurf" className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Name: {smurf.name}</Card.Title>
                    <Card.Text>
                        Position: {smurf.position}<br/>
                        Nickname: {smurf.nickname}<br/>
                    </Card.Text>
         
                </Card.Body>
            </Card>
        </div>
        )
}

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.