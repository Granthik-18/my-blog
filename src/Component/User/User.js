import '../User/User.css'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {

    const [data, setData] = useState([])

    useState(() => {
        fetch(`https://api.github.com/users/Granthik-18`)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setData(data)

            })
    })

    return (
        <>
            {/* <!--====== Start Profile One ======--> */}
            <div className="profile">
                <div className="">
                    <div className="">
                        <div className="container">
                            <div className="profile-content">
                                <div className="profile-card">
                                    <div className="profile-card-wrapper">
                                        <div
                                            className="card-header bg_cover"
                                        // style="background-image: url(https://cdn.ayroui.com/1.0/images/profile/card-bg.jpg);"
                                        ></div>
                                        {/* <!-- card-header --> */}
                                        <div className="card-profile">
                                            <img
                                                src={`${data.avatar_url}`}
                                                alt="Profile"
                                            />
                                        </div>
                                        {/* <!-- card-profile --> */}
                                        <div className="card-content text-center rounded-buttons">
                                            <h2 className="card-title">{data.name}</h2>
                                            <h4 className="text">{data.login}</h4>
                                            <h5 className="text">{data.user_view_type}</h5>
                                            <p className="text">
                                                <Link to={data.html_url}>{data.url}</Link>
                                                {/* Lorem ipsum dolor sit amet, sed magna etiam adipiscing
                                                elit. Mauris id elit tempor, dolor sed curabitur id justo
                                                congue, facilisis sem justo. Integer ut facilisis turpis.
                                                Praesent amet ullamcorper ante nec ipsum dolor. */}
                                            </p>
                                            <Link
                                                className="btn primary-btn rounded-full"
                                                data-toggle="modal"
                                                data-target="#contact-modal"
                                            >
                                                Get In Touch
                                            </Link>
                                        </div>
                                        {/* <!-- card-content --> */}
                                        <div className="card-social text-center">
                                            <ul>
                                                <li>
                                                    <Link
                                                        className="
                                                        btn
                                                        primary-btn-outline
                                                        rounded-full
                                                        icon-btn
                                                        btn-sm
                                                        facebook
                                                        "

                                                    >
                                                        <i className="lni lni-facebook-filled"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="
                                                        btn
                                                        primary-btn-outline
                                                        rounded-full
                                                        icon-btn
                                                        btn-sm
                                                        twitter
                                                        "

                                                    >
                                                        <i className="lni lni-twitter-original"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="
                                                        btn
                                                        primary-btn-outline
                                                        rounded-full
                                                        icon-btn
                                                        btn-sm
                                                        instagram
                                                        "

                                                    >
                                                        <i className="lni lni-instagram-original"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="
                                                        btn
                                                        primary-btn-outline
                                                        rounded-full
                                                        icon-btn
                                                        btn-sm
                                                        linkedin
                                                        "

                                                    >
                                                        <i className="lni lni-linkedin-original"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- card-social --> */}
                                    </div>
                                    {/* <!-- profile-card --> */}
                                </div>
                                {/* <!-- profile-card --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--====== End Profile One ======--> */}
        </>
    )
}

export default User
