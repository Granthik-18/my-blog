import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <>
            {/* <!--====== FOOTER ONE PART START ======--> */}
            <footer className="footer-area footer-one">
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-4 col-sm-12">
                                <div className="f-about">
                                    <div className="footer-logo">
                                        <img src="https://cdn.ayroui.com/1.0/images/footer/logo.svg" alt="Logo" />
                                    </div>
                                    <p className="text">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                                <div className="footer-app-store">
                                    <h5 className="download-title">Download Our App Now!</h5>
                                    <ul>
                                        <li>
                                            <img
                                                src="https://cdn.ayroui.com/1.0/images/footer/app-store.svg"
                                                alt="app"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="https://cdn.ayroui.com/1.0/images/footer/play-store.svg"
                                                alt="play"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-4">
                                <div className="footer-link">
                                    <h6 className="footer-title">Company</h6>
                                    <ul>
                                        <li>About</li>
                                        <li>Contact</li>
                                        <li>Marketing</li>
                                        <li>Awards</li>
                                    </ul>
                                </div>
                                {/* <!-- footer link --> */}
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4">
                                <div className="footer-link">
                                    <h6 className="footer-title">Services</h6>
                                    <ul>
                                        <li>Products</li>
                                        <li>Business</li>
                                        <li>Developer</li>
                                        <li>Insights</li>
                                    </ul>
                                </div>
                                {/* <!-- footer link --> */}
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4">
                                {/* <!-- Start Footer Contact --> */}
                                <div className="footer-contact">
                                    <h6 className="footer-title">Help & Suuport</h6>
                                    <ul>
                                        <li>
                                            <i className="lni lni-map-marker"></i> Madison Street, NewYork,
                                            USA
                                        </li>
                                        <li><i className="lni lni-phone-set"></i> +88 556 88545</li>
                                        <li><i className="lni lni-envelope"></i> support@ayroui.com</li>
                                    </ul>
                                </div>
                                {/* <!-- End Footer Contact --> */}
                            </div>
                        </div>
                        {/* <!-- row --> */}
                    </div>
                    {/* <!-- container --> */}
                </div>
                {/* <!-- footer widget --> */}
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div
                                    className="
                                    copyright
                                    text-center
                                    d-md-flex
                                    justify-content-between
                                    align-items-center
                                    "
                                >
                                    <p className="text">Copyright © 2025 AyroUI. All Rights Reserved</p>
                                    <ul className="social">
                                        <li>

                                            <i className="lni lni-facebook-filled"></i>

                                        </li>
                                        <li>

                                            <i className="lni lni-twitter-original"></i>

                                        </li>
                                        <li>
                                            <i className="lni lni-instagram-filled"></i>
                                        </li>
                                        <li>
                                            <i className="lni lni-linkedin-original"></i>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- copyright --> */}
                            </div>
                        </div>
                        {/* <!-- row --> */}
                    </div>
                    {/* <!-- container --> */}
                </div>
                {/* <!-- footer copyright --> */}
            </footer>
            {/* <!--====== FOOTER ONE PART ENDS ======--> */}
        </>
    )
}

export default Footer
