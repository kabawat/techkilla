import React from 'react'
import { Col } from 'react-bootstrap'
import Button from '../button/Button'
const Card = ({ img, title, description, slag, color, delay }) => {
    return (
        <Col xxl={3} xl={3} lg={4} md={6} sm={6} className='my-3' data-aos="fade-up" data-aos-delay={delay * 100}>
            <div className="serviceCart">
                <div data-aos="fade-up" data-aos-delay={delay * 100}>
                    <div className="iconContainer" style={{ background: color }}>
                        <div className="serviceIcon">
                            <img src={img} alt={title} />
                        </div>
                    </div>
                    <div className="cardDesc" >
                        <div className="cartTitle pt-4">
                            {title}
                        </div>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                <div className="btnSection2" style={{ paddingLeft: '20px' }}>
                    <Button url={slag} title="Read more" />
                </div>
            </div>
        </Col>
    )
}

export default Card