import SingleCard from '@/components/ProjectSlider/singleCard'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SiShanghaimetro } from 'react-icons/si'
const Page = ({ caseStudie }) => {
    console.log(caseStudie)
    return (
        caseStudie ? <>
            <Head>
                <title>{caseStudie?.data?.heading}</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className="mainContainer">

                        <div className="caseHomePage">
                            <div className="pagebg">
                                <Image src={caseStudie?.BaseUrl + caseStudie?.data?.cover_page} alt='Excitometer-Tetra Pak' width={1920} height={1080} />
                            </div>
                            <div className="pageText">
                                <Container>
                                    <div className="zoom">
                                        {caseStudie?.data?.heading}
                                    </div>
                                </Container>
                            </div>
                        </div>

                        {/* Key Highlights */}
                        {
                            caseStudie?.data?.KeyHighlights?.length ? <div className="pageContainer">
                                <h2 className="heading"> Key highlights</h2>
                                <Container>
                                    <Row>
                                        {
                                            caseStudie?.data?.KeyHighlights?.map((item, keys) => {
                                                return <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <div className='key-cart'>
                                                        <div className='keyCount'>
                                                            <Row className='align-items-center'>
                                                                <Col xxl={3} xl={3} lg={3} md={4} sm={4} xs={3}>
                                                                    <div className='key-icon'>
                                                                        <Image src={caseStudie?.BaseUrl + item?.icon} width={80} height={80} />
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={9} xl={9} lg={9} md={8} sm={8} xs={9}>
                                                                    <div className='key-para'>
                                                                        {item?.heading}
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Col>
                                            })
                                        }

                                    </Row>
                                </Container>
                            </div> : ''
                        }

                        {/* desc with image  */}
                        {
                            caseStudie?.data?.case_studie?.length ? caseStudie?.data?.case_studie?.map((item, keys) => {
                                return <div className="pageContAbout">
                                    <Container>
                                        {
                                            ((keys + 1) % 2 !== 0) ? <Row>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className="pageInnerCol">
                                                        <div className="headCol">
                                                            {item?.heading}
                                                        </div>
                                                        <div className="ColPara">
                                                            {item?.desc}
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className='caseFullImg'>
                                                        <Image src={caseStudie?.BaseUrl + item?.thumbnail} alt='What is an excitometer?' width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                            </Row> : <Row>

                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className='caseFullImg'>
                                                        <Image src={caseStudie?.BaseUrl + item?.thumbnail} alt='What is an excitometer?' width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className="pageInnerCol">
                                                        <div className="headCol">
                                                            {item?.heading}
                                                        </div>
                                                        <div className="ColPara">
                                                            {item?.desc}
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        }

                                    </Container>
                                </div>
                            }) : ''
                        }

                        {/* use_case 1 */}
                        {
                            caseStudie?.data?.use_case_oder?.length ? <div className="useCaseSection">
                                <Container>
                                    <div className="heading">
                                        use cases one
                                    </div>
                                    <Row>
                                        {
                                            caseStudie?.data?.use_case_oder?.map((item, keys) => {
                                                return <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                                    <div className='key-cart'>
                                                        <div className='keyCount'>
                                                            <div className='key-count' id={`key-count${keys + 1}`} >
                                                                {keys + 1}
                                                            </div>
                                                            <div className='benif-para'>
                                                                {item}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            })
                                        }

                                    </Row>
                                </Container>
                            </div> : ''
                        }

                        {/* use_case  2*/}
                        {
                            caseStudie?.data?.use_case_image?.length ? <div className="micro_qr">
                                <h2 className="micro_heading01 mb-4">
                                    Use <span>cases</span>
                                </h2>
                                <div className="qr-p">
                                    <Container>
                                        <Row>
                                            {
                                                caseStudie?.data?.use_case_image?.map((curCase, index) => {
                                                    // const Compo = 
                                                    return (
                                                        <Col key={index} xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                            <div className="col-qr">
                                                                <div className="qr-cases">
                                                                    <h3 className="qr-cases-icon">
                                                                        <Image src={caseStudie?.BaseUrl + curCase.icon} alt={curCase?.heading} width={1920} height={1080} />
                                                                    </h3>
                                                                    <div className="qr-title">
                                                                        {curCase?.heading}
                                                                    </div>
                                                                    <div className="qr-desc">
                                                                        {curCase?.desc}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    )
                                                })
                                            }

                                        </Row>
                                    </Container>
                                </div>
                            </div> : ''
                        }


                        {/* Benefits */}
                        {
                            caseStudie?.data?.benefits?.length ? <div className='pb-5'>
                                <Container>
                                    <div className="serviceContainer py-5">
                                        <h3 className='text-center benifit-head pt-4' >Benefits </h3>
                                        <div className='text-center benifit-para'>Benefits of launching your own microsite</div>
                                    </div>
                                    <Row className='justify-content-center'>

                                        {
                                            caseStudie?.data?.benefits?.map((item, keys) => {
                                                return <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                                    <div className='benifit'>
                                                        <div className='benifit-icon '>
                                                            <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(29.72deg 97.27% 56.86%)' }}>
                                                                <SiShanghaimetro />
                                                            </div>
                                                        </div>
                                                        <h5 className='head'>
                                                            Specifically aimed campaigns
                                                        </h5>
                                                        <p>
                                                            Targeted campaigns increase engagement, optimize budget, and drive conversions for brands.
                                                        </p>
                                                    </div>
                                                </Col>
                                            })
                                        }

                                    </Row>
                                </Container>
                            </div> : ''
                        }


                        {/* Related Projects */}
                        {
                            caseStudie?.data?.releted_project?.length && <div className="bgWhite py-5">
                                <Container>
                                    <div className='use_case_heading'>Related projects</div>
                                    <SingleCard list={caseStudie?.data?.releted_project} baseUrl={caseStudie?.BaseUrl} />
                                </Container>
                            </div>
                        }
                        <Footer />
                    </div>
                </div>
            </main >
        </> : <div className="loader"></div>
    )
}

export default Page

export const getStaticPaths = async () => {
    // const result = await responce?.json()
    // console.log(result)
    return {
        paths: [
            {
                params: {
                    slag: '/From-Challenge-to-Triumph/',
                },
            }, // See the "paths" section below
        ],
        fallback: true, // false or "blocking"
    }
}

export const getStaticProps = async (context) => {
    try {
        const { slag } = context.params
        const responce = await fetch(`${process.env.BaseUrl}/api/case-studie/${slag}/`)
        const data = await responce.json()
        return {
            props: {
                caseStudie: data
            }
        }
    } catch (error) {
        return {
            props: {
                caseStudie: {}
            }
        }
    }
}