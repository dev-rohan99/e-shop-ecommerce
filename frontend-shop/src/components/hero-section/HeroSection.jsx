import React from 'react';


const HeroSection = () => {

    

    return (
        <>
        
            <section className="intro-section">
                <div className="swiper-container swiper-theme nav-inner pg-inner swiper-nav-lg animation-slider pg-xxl-hide nav-xxl-show nav-hide">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide banner banner-fixed intro-slide intro-slide1"
                            style={{backgroundImage: "url(assets/images/demos/demo1/sliders/slide-1.jpg)", backgroundColor: "#ebeef2"}}>
                            <div className="container">
                                <figure className="slide-image skrollable slide-animate">
                                    <img src="https://i.pinimg.com/originals/fa/8a/30/fa8a30e4ac0141de135a9c714636c331.png" alt="Banner"
                                        data-bottom-top="transform: translateY(10vh);"
                                        data-top-bottom="transform: translateY(-10vh);" width="474" height="397"/>
                                </figure>
                                <div className="banner-content y-50 text-right">
                                    <h5 className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate"
                                        data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'duration': '1s',
                                    'delay': '.2s'
                                }">
                                        Custom <span className="p-relative d-inline-block">Men’s</span>
                                    </h5>
                                    <h3 className="banner-title font-weight-bolder ls-25 lh-1 slide-animate"
                                        data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'duration': '1s',
                                    'delay': '.4s'
                                }">
                                        RUNNING SHOES
                                    </h3>
                                    <p className="font-weight-normal text-default slide-animate" data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'duration': '1s',
                                    'delay': '.6s'
                                }">
                                        Sale up to <span className="font-weight-bolder text-secondary">30% OFF</span>
                                    </p>

                                    <a href="shop-list.html"
                                        className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
                                        data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'duration': '1s',
                                    'delay': '.8s'
                                }">SHOP NOW<i className="w-icon-long-arrow-right"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <button className="swiper-button-next"></button>
                    <button className="swiper-button-prev"></button>
                </div>
            </section>
        
        </>
    )
}

export default HeroSection;
