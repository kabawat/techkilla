import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bg from '../../../../public/Assets/service/web banner_micro site.jpg'
import serive from '../../../../public/Assets/service/miro-service.gif'
import UseCase from '@/components/service/UseCase'
import Benefits from '@/components/service/Benefit'
import GridSlider from '@/components/ProjectSlider/GridSlider'
const usecase = [
    {
        img: '/Assets/service/product launch-01-01.png',
        title: 'Product launch'
    },
    {
        img: '/Assets/service/Targeting prospects-01-01.png',
        title: 'Targeting prospects'
    },
    {
        img: '/Assets/service/Geotargeting market-01-01.png',
        title: 'Geotargeting market'
    },
    {
        img: '/Assets/service/distinguishing the corporate-01-01.png',
        title: 'distinguishing the corporate brand'
    },
    {
        img: '../../../../public/Assets/service/product launch-01-01.png',
        title: 'promoting events'
    },
]
const list = ["DOW packaging and supplies",
    "NHRD QR verification and instant print",
    "HDFC Inquizitive family",
    "HDFC Analytiq 1.0",
    "HDFC Analytiq 2.",
    "HDFC Analytiq 3.",
    "Microsoft Hackathon",
    "Tata International E-Marathon",
    "Tuborg super over",
    "TVS Motors digital tambola",
    "Concentrix got talent",
    "Multitv Quiz Game",
    "Total energies virtual talent hunt show",
    "Nutella - Ramadan video quiz game",
    "Cipla cycle meet",
    "Colgate swashbuckers day",
    "World cloud photobooth",
    "Colgate - IPL",
    "Cera - Quiz game",
    "Cipla Urology quiz game",
    "Loreal dreamlength launch",
    "Total Oil - talent hun",]
const MicrositeDesign = () => {
    const css = { maxWidth: '100%', height: 'auto' }
    return (
        <>
            <Head>
                <title>Microsite design</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="serviceIntro">
                            <div className="backGround">
                                <Image src={bg} />
                            </div>
                            <div className="introSection">
                                <h1><span>M</span>icrosite <span>D</span>esign</h1>
                                <Container>
                                    <Row className='justify-content-center'>
                                        <Col xxl={10} lg={11} md={12} sm={12}>
                                            <div className="introDesc ">
                                                Crafting Engaging and Impactful Microsite Designs for Your Business
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="desc pb-5">
                            <h2 className='text-center py-5'>What are microsites?</h2>
                            <Container>
                                <Row>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">
                                            <p>
                                                A microsite is a website (or a single web page) that is dedicated to a single brand and is utilized by businesses in order to promote special events, products, or campaigns.
                                            </p>
                                            <p>
                                                Typically, they are websites that do not focus on application development. They would not have capabilities for eCommerce, which is something that most of Shopify's competitors provide, nor would they have a complex sales funnel.
                                            </p>
                                            <p>
                                                Instead, they are information-heavy websites with the goal of attracting the greatest number of users feasible. The material that can be found on their website (or websites) is almost always humorous and encourages users to participate. Because of this, their brand is better able to engage with users.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <Image src={serive} style={css} />
                                    </Col>
                                </Row>
                            </Container>
                            <div className="use_case">
                                <div id="use_case">
                                    <Container>
                                        <div className='use_case_heading'>Use cases</div>
                                        <Row>
                                            {usecase.map((curItem,index) => <UseCase key={index} img={curItem.img} title={curItem.title} />)}
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                            <div className='BenefitsContainer'>
                                <h4>Benefits of launching your own microsite</h4>
                                <div className="Benefits">
                                    <Benefits data={['Specifically aimed campaigns', 'The production of leads', 'Awareness of the brand', 'SEO with virality potential for specialized keywords', ' Easy to manage']} />
                                </div>
                            </div>
                        </div>
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <GridSlider list={list} />
                                </div>
                            </Container>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default MicrositeDesign