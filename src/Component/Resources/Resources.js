import React from 'react'
import '../Resources/Resources.css'
import Cards from './Cards'
// import { useState } from 'react'

const source = [
    {
        title: 'Australia',
        subTitle: 'Canberra',
        image: 'https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/543ffbf9-209a-4762-9649-f0005cfa28c1/240404+-+175608+-+001.jpg',
        discription: 'Australia is a federal parliamentary democracy and constitutional monarchy comprising six states and ten territories.'
    },
    {
        title: 'Canada',
        subTitle: 'Ottawa',
        image: 'https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg',
        discription: 'Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean.'
    },
    {
        title: 'United Kingdom',
        subTitle: 'London',
        image: 'https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/6c97df42-bcb4-4ad8-928a-c2629daae75b/240219+-+080004+-+001.jpg',
        discription: 'London is the capital and largest city of both England and the United Kingdom, with a population of 8,866,180 in 2022.'
    }
]

// const source = [fetch('https://randomuser.me/api/')
//     .then(response => response.json())]

const Resources = () => {

    // const [data, setData] = useState([])

    // useState(() => {
    //     fetch(`https://randomuser.me/api/`)
    //         .then((response) => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)

    //         })
    // })

    return (
        <>
            {/* <!--====== Tiny Slider Css ======--> */}
            <link rel="stylesheet" href="https://cdn.ayroui.com/1.0/css/tiny-slider.css" />

            {/* <!--====== TESTIMONIAL ONE PART START ======--> */}

            <section className="testimonial-one">
                {/* <!--======  Start Section Title Seven ======--> */}
                <div className="section-title-seven">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title align-center">
                                    <span> Testimonial </span>
                                    <h2 className="fw-bold">What People Says</h2>
                                    {/* <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
            </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- container --> */}
                </div>
                {/* <!--====== End Section Title Seven ======--> */}
                <div className="container">
                    <div className="testimonial-one-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-12">
                                <div className="row testimonial-one-active">

                                    {source.map((item, index) => (
                                        <div className="col-lg-4">
                                            <div className="single-testimonial text-center">
                                                <div className="testimonial-image">
                                                    <img src={item.image} alt={item.title} key={item.id} />
                                                    <div className="quote-icon">
                                                        <i className="lni lni-quotation"></i>
                                                    </div>
                                                </div>
                                                <div className="testimonial-content">
                                                    <p className="text">
                                                        {item.discription}
                                                    </p>
                                                    <h6 className="author-name">{item.title}</h6>
                                                    <span className="sub-title">{item.subTitle}</span>
                                                </div>
                                            </div>
                                            {/* <!-- single testimonial --> */}
                                        </div>
                                    ))}

                                </div >
                                {/* <!-- row --> */}
                            </div >
                        </div >
                    </div >
                </div >
                {/* <!-- container --> */}
            </section >

            {/* <!--====== TESTIMONIAL ONE PART ENDS ======--> */}
        </>
    )
}

export default Resources
