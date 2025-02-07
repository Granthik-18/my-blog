import '../Header/Header.css';
import { Link } from 'react-router-dom';

function App() {

    return (
        <>

            {/* <!--====== NAVBAR ONE PART START ======--> */}
            <section className="navbar-area navbar-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link to='/' className="navbar-brand">
                                    <img src="https://cdn.ayroui.com/1.0/images/white-logo.svg" alt="Logo" />
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarOne"
                                    aria-controls="navbarOne"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <Link to=''
                                                className="page-scroll active"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#sub-nav1"
                                                aria-controls="sub-nav1"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='services' >Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='resources'>Resources</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='support' >Support</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='user' >User</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-btn d-none d-sm-inline-block">
                                    <ul>
                                        <li>
                                            <Link className="btn primary-btn-outline">
                                                Sign In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="btn primary-btn">
                                                Sign Up
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* <!-- navbar --> */}
                        </div>
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
            </section>
            {/* <!--====== NAVBAR ONE PART ENDS ======--> */}

            {/* <!--====== Bootstrap js ======--> */}
            <script src="https://cdn.ayroui.com/1.0/js/bootstrap.bundle.min.js"></script>
            {/* 
            <script>
                //===== close navbar-collapse when a  clicked
                let navbarTogglerOne = document.querySelector(
                ".navbar-one .navbar-toggler"
                );
                navbarTogglerOne.addEventListener("click", function () {
                    navbarTogglerOne.classNameList.toggle("active");
                });
            </script> */}
        </>
    );
}

export default App;