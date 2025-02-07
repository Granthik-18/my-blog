import React from 'react'
import { Link } from 'react-router-dom'
import '../Services/Services.css'

const Services = () => {
    return (
        <>
            {/* <!--====== FEATURE ONE PART START ======--> */}
            <section className="features-area features-one">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h3 className="title">Specializing In</h3>
                                <p className="text">
                                    Stop wasting time and money designing and managing a website
                                    that doesn’t get results. Happiness guaranteed!
                                </p>
                            </div>
                            {/* <!-- row --> */}
                        </div>
                    </div>
                    {/* <!-- row --> */}
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-7 col-sm-9">
                            <div className="features-style-one text-center">
                                <div className="features-icon">
                                    <i className="lni lni-compass"></i>
                                </div>
                                <div className="features-content">
                                    <h4 className="features-title">Graphics Design</h4>
                                    <p className="text">
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                    <div className="features-btn rounded-buttons">
                                        <Link
                                            className="btn primary-btn-outline rounded-full"
                                        >
                                            KNOW MORE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single features --> */}
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-9">
                            <div className="features-style-one text-center">
                                <div className="features-icon">
                                    <i className="lni lni-construction"></i>
                                </div>
                                <div className="features-content">
                                    <h4 className="features-title">Product Design</h4>
                                    <p className="text">
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                    <div className="features-btn rounded-buttons">
                                        <Link
                                            className="btn primary-btn-outline rounded-full"
                                        >
                                            KNOW MORE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single features --> */}
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-9">
                            <div className="features-style-one text-center">
                                <div className="features-icon">
                                    <i className="lni lni-cup"></i>
                                </div>
                                <div className="features-content">
                                    <h4 className="features-title">UI & UX Design</h4>
                                    <p className="text">
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                    <div className="features-btn rounded-buttons">
                                        <Link
                                            className="btn primary-btn-outline rounded-full"
                                        >
                                            KNOW MORE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single features --> */}
                        </div>
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
            </section>
            {/* <!--====== FEATURE ONE PART ENDS ======--> */}
        </>
    )
}

export default Services
