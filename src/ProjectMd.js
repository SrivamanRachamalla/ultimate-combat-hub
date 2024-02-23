import React from "react"
import { useState, useEffect } from 'react';
import { CardColumns, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap'
import axios from 'axios';






function ProjectMd() {

    const [isOpen, setIsOpen] = useState(false);








    return (
        <div>
            <CardGroup>
                
                <Card className="smcard3">
                    <CardImg className="cardimaged"
                        alt="Card image cap"
                        src="https://i.pinimg.com/736x/9f/02/b2/9f02b2d8f47a1b52a09a40ba706d6557.jpg"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            <h1>STRENGTH</h1>
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            “Survival of the Fittest”
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )




}
export default ProjectMd