/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function PageNavigation() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img className="img-fluid rounded mb-3 mb-md-0" src="/img/logo.png" alt="" />
                </a>
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item active dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownPortfolio"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Portfolio
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                                <a className="dropdown-item active" href="portfolio-1-col.html">
                                    1 Column Portfolio
                                </a>
                                <a className="dropdown-item" href="portfolio-2-col.html">
                                    2 Column Portfolio
                                </a>
                                <a className="dropdown-item" href="portfolio-3-col.html">
                                    3 Column Portfolio
                                </a>
                                <a className="dropdown-item" href="portfolio-4-col.html">
                                    4 Column Portfolio
                                </a>
                                <a className="dropdown-item" href="portfolio-item.html">
                                    Single Portfolio Item
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownBlog"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Other Pages
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                                <a className="dropdown-item" href="full-width.html">
                                    Full Width Page
                                </a>
                                <a className="dropdown-item" href="sidebar.html">
                                    Sidebar Page
                                </a>
                                <a className="dropdown-item" href="faq.html">
                                    FAQ
                                </a>
                                <a className="dropdown-item" href="404.html">
                                    404
                                </a>
                                <a className="dropdown-item" href="pricing.html">
                                    Pricing Table
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function PageContent() {
    return (
        <div className="container">
            <h1 className="mt-4 mb-3">
                Portfolio 1<small>Subheading</small>
            </h1>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>

            <div className="row">
                <div className="col-md-7">
                    <a href="#">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="/img/logo.png" alt="" />
                    </a>
                </div>
                <div className="col-md-5">
                    <h3>Project One</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate.
                        Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.
                    </p>
                    <a className="btn btn-primary" href="#">
                        View Project
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
            </div>

            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

function PageFooter() {
    return (
        <footer className="py-5 bg-secondary fixed-bottom">
            <div className="container">
                <div className="d-flex flex-row-reverse">
                    <div className="text-light">
                        <h6>Контакти</h6>
                        <h6>
                            Телефони: <br />
                            380 (44) 204 86 10
                            <br />
                            380 (44) 204 92 85
                        </h6>
                        <h6>
                            Пошта: <br />
                            kafedra@acts.kpi.ua
                        </h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function App() {
    return (
        <>
            {PageNavigation()}
            {PageContent()}
            {PageFooter()}
        </>
    );
}

export default App;
