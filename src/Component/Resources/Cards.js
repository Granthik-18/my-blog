import React from 'react'
import '../Resources/Resources.css'


const Cards = ({ image, title, discription, subTitle, id }) => {
    return (
        <>

            <div className="col-lg-4">
                <div className="single-testimonial text-center">
                    <div className="testimonial-image">
                        {/* <img src="https://cdn.ayroui.com/1.0/images/testimonial/author-1.jpg" alt="Author" /> */}
                        <img src={image} alt={title} key={id} />
                        <div className="quote-icon">
                            <i className="lni lni-quotation"></i>
                        </div>
                    </div>
                    <div className="testimonial-content">
                        <p className="text">
                            {/* Stop wasting time and money designing and managing a
                            website that doesn’t get results. Happiness lorem guaranteed! */}
                            {discription}
                        </p>
                        {/* <h6 className="author-name">Isabela Moreira</h6> */}
                        <h6 className="author-name">{title}</h6>
                        <span className="sub-title">{subTitle}</span>
                    </div>
                </div>
                {/* <!-- single testimonial --> */}
            </div>

        </>
    )
}

export default Cards
