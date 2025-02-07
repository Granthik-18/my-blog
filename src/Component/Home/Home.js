import React from 'react'

const Home = () => {
    return (
        <>
            <section className="card-area pb-5 pt-5">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-md-7 col-sm-9 pb-5">
                            <div className="single-card card-style-one">
                                <div className="card-image">
                                    <img src="https://cdn.ayroui.com/1.0/images/card/card-1.jpg" alt="Image" />
                                </div>
                                <div className="card-content">
                                    <h4 className="card-title">
                                        Item title is here
                                    </h4>
                                    <p className="text">
                                        Short description for the ones who look for something new
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
            </section>
            {/* <!--====== CARD PART ENDS ======--> */}
        </>
    )
}

export default Home
