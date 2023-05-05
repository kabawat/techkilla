import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineInstagram } from 'react-icons/ai'
import Ads from './Ads'
import WebGame from './WebGame'
import Link from 'next/link'
import Image from 'next/image'
const ServiceSection = () => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8} md={8} sm={8}>
                    <div className='colHeading' style={{ textAlign: 'center' }}>Our Services</div>
                    <h3 className="section__title" style={{ color: " #fff", textAlign: 'center' }}>
                        Featured Services We <span className='section__title-line-center'>Provide You</span>
                    </h3>
                </Col>
            </Row>
            <Row className='pt-4'>
                <Col xxl={3} lg={3} md={6} sm={12} className={'mt-4'} >
                    <div className="serviceCard pt-3">
                        <div className="cartLogo">
                            <div className="icon">
                                <AiOutlineInstagram />
                            </div>
                        </div>
                        <div className="serviceCartTitle">
                            Microsite design
                        </div>
                        <p>
                            We create customised microsites for your occasions, unique needs, and interactions.
                        </p>
                    </div>
                </Col>

                <Col xxl={3} lg={3} md={6} sm={12} className={'mt-4'} >
                    <div className="serviceCard pt-3">
                        <div className="cartLogo">
                            <div className="icon">
                                <Ads />
                                {/* <WebGame /> */}
                            </div>
                        </div>
                        <div className="serviceCartTitle">
                            Playable Ads
                        </div>
                        <p>
                            Web, Smart Apps, and social feeds interactive game
                            experience.
                        </p>
                    </div>
                </Col>

                <Col xxl={3} lg={3} md={6} sm={12} className={'mt-4'} >
                    <div className="serviceCard pt-3">
                        <div className="cartLogo">
                            <div className="icon">
                                <Image src='/vr.png' alt="VR Experience" />
                            </div>
                        </div>
                        <div className="serviceCartTitle">
                            VR Experience
                        </div>
                        <p>
                            360 Virtual Tour and Gaming Experiences
                        </p>
                    </div>
                </Col>

                <Col xxl={3} lg={3} md={6} sm={12} className={'mt-4'} >
                    <div className="serviceCard pt-3">
                        <div className="cartLogo">
                            <div className="icon">
                                {/* <Ads /> */}
                                <WebGame />
                            </div>
                        </div>
                        <div className="serviceCartTitle">
                            Web/Newsfeed Games
                        </div>
                        <p>
                            Customized Interactive Games for Web and Social Newsfeed
                        </p>
                    </div>
                </Col>
            </Row>
            <div className='serviceBtn btnSection2'>
                <button>
                    <Link href="https://calendly.com/techkilla/meeting" target='_blank'>Book free demo</Link>
                    <span></span>
                </button>
            </div>

        </Container >
    )
}

export default ServiceSection