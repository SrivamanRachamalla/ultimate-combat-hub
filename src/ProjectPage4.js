import React from "react"
import { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { modal, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CardColumns, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap'
import { Popover, PopoverBody, PopoverHeader, PopoverItem, UncontrolledPopover } from 'reactstrap';
import { QRCodeSVG } from "qrcode.react";
import axios from 'axios';
import ProjectQr from "./ProjectQr";


function ProjectPage4() {


    const [isOpen, setIsOpen] = useState(false);

    const [PopoverItem, setPopoverItem] = useState(false);
    const [arr, setArr] = useState([]);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [modal, setModal] = useState(false);


    const togglePopover = (e) => setPopoverOpen(!popoverOpen);


    const toggle = (e) => {
        e.preventDefault();
        setPopoverItem(!PopoverItem);
        setModal(!modal);
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("http://localhost:5002/fetch");
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
                                    <p />
                                    <h3>Be  Joyfull to Learn {item.name}</h3>
                                    {item.name} training develops strength, power, agility, and helps to improve their balance.
                                    coordination, and reaction time.It need consistent practice and develop your personality.{item.name}can also keep mind focus and helps as an therapy
                                    {/* Functional training develops strength, power, agility, and helps to improve their balance, coordination, and reaction time. */}
                                </span>

                                <div>
                                    <Button
                                        id="UncontrolledPopover"
                                        type="button"
                                    >
                                        Payment Details {item.name}
                                    </Button>
                                    <UncontrolledPopover
                                        placement="bottom"
                                        target="UncontrolledPopover"
                                    >
                                        <PopoverHeader>

                                        </PopoverHeader>
                                        <PopoverBody>
                                            {/* <QRCodeSVG value={<ProjectQr/>} /> */}

                                            <Table>

                                                <tbody key={item.id}>

                                                    <tr key={item.id}>
                                                        <td>COURSE TIME</td>
                                                        <td>{item.time1}</td>
                                                        <td>PRICE</td>
                                                        <td>{item.price1}</td>
                                                        <QRCodeSVG value={item.name} />

                                                    </tr>
                                                    <tr key={item.id}>
                                                        <td>COURSE TIME</td>
                                                        <td>{item.time2}</td>
                                                        <td>PRICE</td>
                                                        <td>{item.price2}</td>
                                                        <QRCodeSVG value={item.name} />
                                                    </tr>
                                                    <tr>
                                                        <td>COURSE TIME</td>
                                                        <td>{item.time3}</td>
                                                        <td>PRICE</td>
                                                        <td>{item.price3}</td>
                                                        <QRCodeSVG value={item.name} />
                                                    </tr>
                                                    <tr key={item.id}>
                                                        <td>COURSE TIME</td>
                                                        <td>{item.time4}</td>
                                                        <td>PRICE</td>
                                                        <td>{item.price4}</td>
                                                        <QRCodeSVG value={item.name} />
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </PopoverBody>
                                    </UncontrolledPopover>
                                </div>
                                <div >
                                    <br />
                                    please watch some of our videos
                                    <br />
                                    to know in detail
                                    <br />
                                    {/* <Button key={item.id} > */}
                                    <div>
                                        <Button color="danger" onClick={toggle}>
                                            Related-videos
                                        </Button>
                                        <Modal
                                            isOpen={modal}
                                            modalTransition={{ timeout: 700 }}
                                            backdropTransition={{ timeout: 1300 }}
                                            toggle={toggle}
                                            className={item.id}
                                        >
                                            <ModalHeader toggle={toggle}>explore videos</ModalHeader>
                                            <ModalBody >
                                                <iframe width="460" height="315" src="https://www.youtube.com/embed/LNfAwWk33nI?si=wtSnhUYqaog4kNQP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </ModalBody>

                                        </Modal>
                                    </div>
                                    {/* </Button> */}
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

