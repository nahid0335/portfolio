import React from 'react';
import Header from '../components/Header.jsx'
import logo from '/images/logo.png';
import logo1 from '/images/brands/logo1.png';
import logo2 from '/images/brands/logo2.png';
import logo3 from '/images/brands/logo3.png';
import logo4 from '/images/brands/logo4.png';
import logo5 from '/images/brands/logo5.png';
import logo6 from '/images/brands/logo6.png';
import logo7 from '/images/brands/logo7.png';
import logo8 from '/images/brands/logo8.png';
import logo9 from '/images/brands/logo9.png';
import homeRight from '/images/banner/home-right.png';
import aboutUs from '/images/about-us.png';
import s1 from '/images/services/s1.png';
import s2 from '/images/services/s2.png';
import s3 from '/images/services/s3.png';
import s4 from '/images/services/s4.png';
import p1 from '/images/portfolio/p1.jpg';
import p2 from '/images/portfolio/p2.jpg';
import p3 from '/images/portfolio/p3.jpg';
import p4 from '/images/portfolio/p4.jpg';
import p5 from '/images/portfolio/p5.jpg';
import p6 from '/images/portfolio/p6.jpg';
import p7 from '/images/portfolio/p7.jpg';
import p8 from '/images/portfolio/p8.jpg';
import p9 from '/images/portfolio/p9.jpg';
import t1 from '/images/testimonials/t1.jpg';
import t2 from '/images/testimonials/t2.jpg';

const HomePage = () => {
  return (
    <>
    <Header/>
    {
        <div>
	        {/*--================ Start Home Banner Area =================--*/}
            <section className="home_banner_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner_content">
                                    <h3 className="text-uppercase">Hell0</h3>
                                    <h1 className="text-uppercase">I am rahi satner</h1>
                                    <h5 className="text-uppercase">senior wordpress developer</h5>
                                    <div className="d-flex align-items-center">
                                        <a className="primary_btn" href="#"><span>Hire Me</span></a>
                                        <a className="primary_btn tr-bg" href="#"><span>Get CV</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="home_right_img">
                                    <img className="" src={homeRight} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--================ End Home Banner Area =================--*/}

            {/*--================ Start About Us Area =================--*/}
            <section className="about_area section_gap">
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-lg-5">
                            <div className="about_img">
                                <img className="" src={aboutUs} alt=""/>
                            </div>
                        </div>

                        <div className="offset-lg-1 col-lg-5">
                            <div className="main_title text-left">
                                <h2>let’s <br/>
                                    Introduce about <br/>
                                    myself</h2>
                                <p>
                                    Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven 
                                    midst their. Beast creepeth. Fish days.
                                </p>
                                <p>
                                    Is give may shall likeness made yielding spirit a itself together created after sea 
                                    is in beast beginning signs open god you're gathering whose gathered cattle let. 
                                    Creature whales fruit unto meat the life beginning all in under give two.
                                </p>
                                <a className="primary_btn" href="#"><span>Download CV</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--================ End About Us Area =================--*/}

            {/*--================ Srart Brand Area =================--*/}
            <section className="brand_area section_gap_bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src={logo1} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src={logo2} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src={logo3} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src={logo4} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src={logo5} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src={logo6} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src={logo7} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src={logo8} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src={logo9} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-4 col-md-6">
                            <div className="client-info">
                                <div className="d-flex mb-50">
                                    <span className="lage">10</span>
                                    <span className="smll">Years Experience Working</span>
                                </div>
                                <div className="call-now d-flex">
                                    <div>
                                        <span className="fa fa-phone"></span>
                                    </div>
                                    <div className="ml-15">
                                        <p>call us now</p>
                                        <h3>(+1)-800-555-6789</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--================ End Brand Area =================--*/}

            {/*--================ Start Features Area =================--*/}
            <section className="features_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2>service offers </h2>
                                <p>
                                    Is give may shall likeness made yielding spirit a itself togeth created 
                                    after sea <br/> is in beast beginning signs open god you're gathering ithe
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row feature_inner">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={s1} alt=""/>
                                <h4>Wp developing</h4>
                                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={s2} alt=""/>
                                <h4>UI/ux design</h4>
                                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={s3} alt=""/>
                                <h4>Web design</h4>
                                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={s4} alt=""/>
                                <h4>seo optimize</h4>
                                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--================ End Features Area =================--*/}

            {/*--================Start Portfolio Area =================--*/}
            <section className="portfolio_area" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title text-left">
                                <h2>quality work <br/>
                                    Recently done project </h2>
                            </div>
                        </div>
                    </div>
                    <div className="filters portfolio-filter">
                        <ul>
                            <li className="active" data-filter="*">all</li>
                            <li data-filter=".popular">popular</li>
                            <li data-filter=".latest"> latest</li>
                            <li data-filter=".following">following</li>
                            <li data-filter=".upcoming">upcoming</li>
                        </ul>
                    </div>
            
                    <div className="filters-content">
                        <div className="row portfolio-grid justify-content-center">
                            <div className="col-lg-4 col-md-6 all latest">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100" src={p1} alt=""/>
                                        <div className="overlay"></div>
                                        <a href={p1} className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">minimal design</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 all popular">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100" src={p2} alt=""/>
                                        <div className="overlay"></div>
                                        <a href={p2} className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">Paint wall</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 all latest">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100" src={p3} alt=""/>
                                        <div className="overlay"></div>
                                        <a href={p3} className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">female light</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 all popular">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100" src={p4} alt=""/>
                                        <div className="overlay"></div>
                                        <a href={p4} className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">fourth air</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 all following">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100" src={p6} alt=""/>
                                        <div className="overlay"></div>
                                        <a href={p6} className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">together sign</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 all upcoming">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100" src={p5} alt=""/>
                                        <div className="overlay"></div>
                                        <a href={p5} className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">multiply fowl</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 all upcoming following">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100" src={p7} alt=""/>
                                        <div className="overlay"></div>
                                        <a href={p7} className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">green heaven</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 all following">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100" src={p8} alt=""/>
                                        <div className="overlay"></div>
                                        <a href={p8} className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4>fly male</h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 all upcoming">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100" src={p9} alt=""/>
                                        <div className="overlay"></div>
                                        <a href={p9} className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">season face</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--================End Portfolio Area =================--*/}

            {/*--================ Start Testimonial Area =================--*/}
            <div className="testimonial_area section_gap_bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2>client say about me</h2>
                                <p>Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast <br/>
                                    beginning signs open god you're gathering ithe</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="testi_slider owl-carousel">
                            <div className="testi_item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src={t1} alt=""/>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="testi_text">
                                            <h4>Elite Martin</h4>
                                            <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi_item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src={t2} alt=""/>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="testi_text">
                                            <h4>Davil Saden</h4>
                                            <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi_item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src={t1} alt=""/>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="testi_text">
                                            <h4>Elite Martin</h4>
                                            <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi_item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src={t2} alt=""/>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="testi_text">
                                            <h4>Davil Saden</h4>
                                            <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi_item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src={t1} alt=""/>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="testi_text">
                                            <h4>Elite Martin</h4>
                                            <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi_item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src={t2} alt=""/>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="testi_text">
                                            <h4>Davil Saden</h4>
                                            <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*--================ End Testimonial Area =================--*/}

            {/*--================ Start Newsletter Area =================--*/}
            <section className="newsletter_area">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12">
                            <div className="subscription_box text-center">
                                <h2 className="text-uppercase text-white">get update from anywhere</h2>
                                <p className="text-white">
                                    Bearing Void gathering light light his eavening unto dont afraid. 
                                </p>
                                <div className="subcribe-form" id="mc_embed_signup">
                                    <form target="_blank" noValidate={true} action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscription relative">
                                        <input name="EMAIL" placeholder="Email address" onFocus={(e) => (e.target.placeholder = '')} onBlur={(e) => (e.target.placeholder = 'Email address')} required="" type="email"/>
                                        <div style={{ position: 'absolute', left: '-5000px' }}>
                                            <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" defaultValue="" type="text"/>
                                        </div>
                                        <button className="primary-btn hover d-inline">Get Started</button>
                                        <div className="info"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--================ End Newsletter Area =================--*/}

            {/*--================Footer Area =================--*/}
            <footer className="footer_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="footer_top flex-column">
                                <div className="footer_logo">
                                    <a href="#">
                                        <img src={logo} alt=""/>
                                    </a>
                                    <h4>Follow Me</h4>
                                </div>
                                <div className="footer_social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-behance"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer_bottom justify-content-center">
                        <p className="col-lg-8 col-sm-12 footer-text">
                            {/*-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --*/}
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            {/*-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --*/}</p>
                    </div>
                </div>
            </footer>
            {/*--================End Footer Area =================--*/}
        </div>
    }
    </>
  );
};

export default HomePage;