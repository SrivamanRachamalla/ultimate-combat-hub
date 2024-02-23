import React from "react";
import { CardColumns, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap'
import logo from "./assets/logo1.png";



function Project3 () {
    return(
        <div className="logo-image1">
            <img src={logo} />
            <div className="text-margin">
            <h1>  WELCOME TO ULTIMATE COMBAT HUB </h1>
            </div>
            <div className="cardmoti">
            <CardGroup>
                <Card className="smcard">
                    <CardImg className="cardimaged"
                        alt="Card image cap"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyn3zBy97qX_Usgqok67AC6Tu0698NO4bew&usqp=CAU"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            <h3>STRONG MIND</h3>
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            strong mentality makes you strong
                        </CardSubtitle>
                        
                        
                    </CardBody>
                </Card>
                
                <Card className="smcard1">
                    <CardImg className="cardimaged"
                        alt="Card image cap"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLaQelw5zyCADWlYY8ccbAJCo0jRQJwzc4Q&usqp=CAU"
                        top
                        width="100%"
                    />
                    <CardBody className="cardbody">
                        <CardTitle tag="h5">
                            <h3>STRONG AMBITION</h3>
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Strong ambiton makes the path to success...!
                        </CardSubtitle>
                        
                       
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
        </div>
    )
}
export default Project3