import React from "react"
import { useState, useEffect } from 'react';
import { CardColumns, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap'
import { Popover, PopoverBody, PopoverHeader, PopoverItem, UncontrolledPopover } from 'reactstrap';
import { QRCodeSVG } from "qrcode.react";
import axios from 'axios';


function ProjectPage4() {


    const [isOpen, setIsOpen] = useState(false);

    const [PopoverItem, setPopoverItem] = useState(false);
    const [arr, setArr] = useState([]);
    const [popoverOpen, setPopoverOpen] = useState(false);


    const togglePopover = (e) => setPopoverOpen(!popoverOpen);


    const toggle = (e) => {
        // e.preventDefault();
        setPopoverItem(!PopoverItem);
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("http://localhost:5001/fetch");
                console.log(response.data);
                setArr(response.data || []);
            } catch (err) {
                throw err;
            }
        };

        fetchData();
    }, []);


    return (
        
        <div className="cardsbackground">
        <div className="cards-styling">



            <CardColumns
                style={{
                    width: '18rem'
                }}
            >
                {arr.map((item) =>
                (<Card className="card-item" key={item.id}>
                    <div className="card-2">
                        <>
                            <span>
                                <p/>
                                <h3>Be  Joyfull to Learn {item.name}</h3>
                                {item.name} training develops strength, power, agility, and helps to improve their balance.
                                coordination, and reaction time.It need consistent practice and develop your personality.{item.name}can also keep mind focus and helps as an therapy 
                                {/* Functional training develops strength, power, agility, and helps to improve their balance, coordination, and reaction time. */}
                            </span>

                            <div>
                                <Button color="light"
                                    id="Popover1"
                                    type="button"
                                >
                                    payment details of BOXING
                                </Button>
                                <Popover
                                    flip
                                    target="Popover1"
                                    toggle={function noRefCheck() { }}
                                >
                                    <PopoverHeader>
                                        Popover Title
                                    </PopoverHeader>
                                    <PopoverBody>
                                        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                                    </PopoverBody>
                                </Popover>
                            </div>
                            <div >
                                <br />
                                please watch some of our videos
                                <br />
                                to know in deatil
                                <br />
                                <Button >
                                    <span>lesson-videos</span>
                                </Button>
                            </div>

                        </>
                    </div>
                    <CardImg
                        alt="Card image cap"
                        src={item.image}
                        top
                        width="100%"
                    />
                    <CardBody>
                        {/* <QRCodeSVG value={item.name} /> */}
                        <CardTitle tag="h5">
                            {item.name}
                        </CardTitle>
                        <CardSubtitle

                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {item.subtitle}
                        </CardSubtitle>
                        <CardText>
                            {item.description}
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                    
                </Card>)
                )}

                {/*                 
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                            <CardText>
                                This card has supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>
                                Button
                            </Button>
                        </CardBody>
                    </Card> */}
                {/* <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/256/186"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                            </CardText>
                            <Button>
                                Button
                            </Button>
                        </CardBody>
                </Card> */}
            </CardColumns>
        </div>
        </div>
    )
}
export default ProjectPage4

