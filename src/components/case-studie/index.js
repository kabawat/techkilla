import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import YouTubePlayer from '../product/videoPlay'

const CaseStudieCart = (props) => {
    const { heading, cart_them, desc, slag, video_link } = props
    const [isPlay, setIsPlay] = useState(false)
    const [curVideo, setCurVideo] = useState(false)
    const handleClose = () => {
        setIsPlay(false)
    }
    const handleVideo = (url) => {
        setCurVideo(url)
        setIsPlay(true)
    }
    return (
        <>
            <div className="cartBody">
                <div className="backBody">
                    <Image alt={heading} src={cart_them} width={1920} height={1080} />
                </div>
                <div className="frontBody">
                    <div className="caseStudie__Title">
                        {/* {heading} */}
                    </div>
                    <div className="cs__desc mb-2">
                        <div className="ellipsis">
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center case-studie-btn">
                        {
                            // slag ? <Link className="button" href={'/case-studies' + slag}>
                            !video_link ? <Link className="button" href={`/case-studies/${slag}`}>
                                <span className="button_lg">
                                    <span className="button_sl"></span>
                                    <span className="button_text">Read More</span>
                                </span>
                            </Link> : <button className="button" onClick={() => handleVideo(video_link)}>
                                <span className="button_lg">
                                    <span className="button_sl"></span>
                                    <span className="button_text">Watch Now</span>
                                </span>
                            </button>
                        }

                    </div>
                </div>
            </div>
            {isPlay && <YouTubePlayer url={curVideo} handleClose={handleClose} />}
        </>
    )
}

export default CaseStudieCart
