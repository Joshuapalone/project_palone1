import "./App.css";
import Script from "./components/script";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const HeaderSection = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src="images/logo.svg" width="119" height="37" alt="Wren logo" />
        </a>

        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="#" className="logo">
              <img
                src="images/logo.svg"
                width="119"
                height="37"
                alt="Wren logo"
              />
            </a>
            <button
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link hover-1" data-nav-toggler>
                Home
              </a>
            </li>

            <li>
              <a
                href="#topics"
                className="navbar-link hover-1"
                data-nav-toggler
              >
                Topics
              </a>
            </li>

            <li>
              <a
                href="#featured"
                className="navbar-link hover-1"
                data-nav-toggler
              >
                Featured Post
              </a>
            </li>

            <li>
              <a
                href="#recent"
                className="navbar-link hover-1"
                data-nav-toggler
              >
                Recent Post
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link hover-1" data-nav-toggler>
                Contact
              </a>
            </li>
          </ul>

          <div className="navbar-bottom">
            <div className="profile-card">
              <img
                src="images/author-1.png"
                width="48"
                height="48"
                alt="Steven"
                className="profile-banner"
              />

              <div>
                <p className="card-title">Hello Steven!</p>

                <p className="card-subtitle">You have 3 new messages</p>
              </div>
            </div>

            <ul className="link-list">
              <li>
                <a href="#" className="navbar-bottom-link hover-1">
                  Profile
                </a>
              </li>

              <li>
                <a href="#" className="navbar-bottom-link hover-1">
                  Articles Saved
                </a>
              </li>

              <li>
                <a href="#" className="navbar-bottom-link hover-1">
                  Add New Post
                </a>
              </li>

              <li>
                <a href="#" className="navbar-bottom-link hover-1">
                  My Likes
                </a>
              </li>

              <li>
                <a href="#" className="navbar-bottom-link hover-1">
                  Account Setting
                </a>
              </li>

              <li>
                <a href="#" className="navbar-bottom-link hover-1">
                  Sign Out
                </a>
              </li>
            </ul>

            <p className="copyright-text">
              Copyright 2022 © Wren - Personal Blog Template. Developed by
              codewithsadee
            </p>
          </div>
        </nav>

        <a href="#" className="btn btn-primary">
          Subscribe
        </a>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
        >
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </header>
  );
};

function HeroSection() {
  return (
    <section className="hero" id="home" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Hello Everyone!</p>

          <h1 className="headline headline-1 section-title">
            I’m <span className="span">Joshua</span>
          </h1>

          <p className="hero-text">
            I use animation as a third dimension by which to simplify
            experiences and guiding through each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>

          <div className="input-wrapper">
            <input
              type="email"
              name="email_address"
              placeholder="Type your email address"
              required
              className="input-field"
              autoComplete="off"
            />

            <button className="btn btn-primary">
              <span className="span">Subscribe</span>
              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </button>
          </div>
        </div>

        <div className="hero-banner">
          <img
            src="images/.png"
            width="327"
            height="490"
            alt="Joshua Christopher"
            className="w-100"
          />

          <img
            src="images/pattern-2.svg"
            width="27"
            height="26"
            alt="shape"
            className="shape shape-1"
          />

          <img
            src="images/pattern-3.svg"
            width="27"
            height="26"
            alt="shape"
            className="shape shape-2"
          />
        </div>

        <img
          src="images/shadow-1.svg"
          width="500"
          height="800"
          alt=""
          className="hero-bg hero-bg-1"
        />

        <img
          src="images/shadow-2.svg"
          width="500"
          height="500"
          alt=""
          className="hero-bg hero-bg-2"
        />
      </div>
    </section>
  );
}

const TopicsSection = () => {
  useEffect(() => {
    const sliderContainer = document.querySelector('.slider-list');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('[data-slider-prev]');
    const nextButton = document.querySelector('[data-slider-next]');

    let currentSlidePos = 0;

    const moveSliderItem = () => {
      const slideWidth = sliderItems[0].offsetWidth;
      currentSlidePos += 1;

      if (currentSlidePos >= sliderItems.length) {
        currentSlidePos = 0;
      }

      sliderContainer.style.transform = `translateX(-${slideWidth * currentSlidePos}px)`;
    };

    prevButton.addEventListener('click', moveSliderItem);
    nextButton.addEventListener('click', moveSliderItem);
  }, []);
  return (
    <section className="topics" id="topics" aria-labelledby="topic-label">
      <div className="container">
        <div className="card topic-card">
          <div className="card-content">
            <h2
              className="headline headline-2 section-title card-title"
              id="topic-label"
            >
              Hot topics
            </h2>

            <p className="card-text">
              Don't miss out on the latest news about Travel tips, Hotels
              review, Food guide...
            </p>

            <div className="btn-group">
              <button
                className="btn-icon"
                aria-label="previous"
                data-slider-prev
              >
                <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
              </button>

              <button className="btn-icon" aria-label="next" data-slider-next>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>

          <div className="slider" data-slider>
            <ul className="slider-list" data-slider-container>
              <li className="slider-item">
                <a href="#" className="slider-card">
                  <figure
                    className="slider-banner img-holder"
                    style={{ "--width": 507, "--height": 618 }}
                  >
                    <img
                      src="images/topic-1.png"
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Sport"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Sport</span>

                    <p className="slider-subtitle">38 Articles</p>
                  </div>
                </a>
              </li>

              <li className="slider-item">
                <a href="#" className="slider-card">
                  <figure
                    className="slider-banner img-holder"
                    style={{ "--width": 507, "--height": 618 }}
                  >
                    <img
                      src="images/topic-2.png"
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Travel"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Travel</span>

                    <p className="slider-subtitle">63 Articles</p>
                  </div>
                </a>
              </li>

              <li className="slider-item">
                <a href="#" className="slider-card">
                  <figure
                    className="slider-banner img-holder"
                    style={{ "--width": 507, "--height": 618 }}
                  >
                    <img
                      src="images/topic-3.png"
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Design"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Design</span>

                    <p className="slider-subtitle">78 Articles</p>
                  </div>
                </a>
              </li>

              <li className="slider-item">
                <a href="#" className="slider-card">
                  <figure
                    className="slider-banner img-holder"
                    style={{ "--width": 507, "--height": 618 }}
                  >
                    <img
                      src="images/topic-4.png"
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Movie"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Movie</span>

                    <p className="slider-subtitle">125 Articles</p>
                  </div>
                </a>
              </li>

              <li className="slider-item">
                <a href="#" className="slider-card">
                  <figure
                    className="slider-banner img-holder"
                    style={{ "--width": 507, "--height": 618 }}
                  >
                    <img
                      src="images/topic-5.png"
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Lifestyle"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Lifestyle</span>

                    <p className="slider-subtitle">78 Articles</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedPost = () => {
  return (
    <section className="section feature" aria-label="feature" id="featured">
      <div className="container">
        <h2 className="headline headline-2 section-title">
          <span className="span">Editor's picked</span>
        </h2>

        <p className="section-text">Featured and highly rated articles</p>

        <ul className="feature-list">
          <li>
            <div className="card feature-card">
              <figure
                className="card-banner img-holder"
                style={{ width: "100%", paddingBottom: "56.25%" }}
              >
                <img
                  src="images/featured-1.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">
                      #Travel
                    </a>

                    <a href="#" className="span hover-2">
                      #Lifestyle
                    </a>
                  </div>

                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                    <span className="span">3 mins read</span>
                  </div>
                </div>

                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>

                <div className="card-wrapper">
                  <div className="profile-card">
                    <img
                      src="images/author-1.png"
                      width="48"
                      height="48"
                      loading="lazy"
                      alt="Joseph"
                      className="profile-banner"
                    />

                    <div>
                      <p className="card-title">Joseph</p>

                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>

                  <a href="#" className="card-btn">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="card feature-card">
              <figure
                style={{ width: "100%", paddingBottom: "56.25%" }}
                className="card-banner img-holder"
              >
                <img
                  src="images/featured-2.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">
                      #Travel
                    </a>

                    <a href="#" className="span hover-2">
                      #Lifestyle
                    </a>
                  </div>

                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                    <span className="span">3 mins read</span>
                  </div>
                </div>

                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>

                <div className="card-wrapper">
                  <div className="profile-card">
                    <img
                      src="images/author-1.png"
                      width="48"
                      height="48"
                      loading="lazy"
                      alt="Joseph"
                      className="profile-banner"
                    />

                    <div>
                      <p className="card-title">Joseph</p>

                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>

                  <a href="#" className="card-btn">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="card feature-card">
              <figure
                className="card-banner img-holder"
                style={{ width: "100%", paddingBottom: "56.25%" }}
              >
                <img
                  src="images/featured-3.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">
                      #Travel
                    </a>

                    <a href="#" className="span hover-2">
                      #Lifestyle
                    </a>
                  </div>

                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                    <span className="span">3 mins read</span>
                  </div>
                </div>

                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>

                <div className="card-wrapper">
                  <div className="profile-card">
                    <img
                      src="images/author-1.png"
                      width="48"
                      height="48"
                      loading="lazy"
                      alt="Joseph"
                      className="profile-banner"
                    />

                    <div>
                      <p className="card-title">Joseph</p>

                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>

                  <a href="#" className="card-btn">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="card feature-card">
              <figure
                className="card-banner img-holder"
                style={{ width: "100%", paddingBottom: "56.25%" }}
              >
                <img
                  src="images/featured-4.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">
                      #Travel
                    </a>

                    <a href="#" className="span hover-2">
                      #Lifestyle
                    </a>
                  </div>

                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                    <span className="span">3 mins read</span>
                  </div>
                </div>

                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>

                <div className="card-wrapper">
                  <div className="profile-card">
                    <img
                      src="images/author-1.png"
                      width="48"
                      height="48"
                      loading="lazy"
                      alt="Joseph"
                      className="profile-banner"
                    />

                    <div>
                      <p className="card-title">Joseph</p>

                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>

                  <a href="#" className="card-btn">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="card feature-card">
              <figure
                className="card-banner img-holder"
                style={{ width: "100%", paddingBottom: "56.25%" }}
              >
                <img
                  src="images/featured-5.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">
                      #Travel
                    </a>

                    <a href="#" className="span hover-2">
                      #Lifestyle
                    </a>
                  </div>

                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                    <span className="span">3 mins read</span>
                  </div>
                </div>

                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>

                <div className="card-wrapper">
                  <div className="profile-card">
                    <img
                      src="images/author-1.png"
                      width="48"
                      height="48"
                      loading="lazy"
                      alt="Joseph"
                      className="profile-banner"
                    />

                    <div>
                      <p className="card-title">Joseph</p>

                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>

                  <a href="#" className="card-btn">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </li>

          {/* Add other featured post items here */}
        </ul>

        <a href="#" className="btn btn-secondary">
          <span className="span">Show More Posts</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </a>
      </div>

      <img
        src="images/shadow-3.svg"
        width="500"
        height="1500"
        loading="lazy"
        alt=""
        className="feature-bg"
      />
    </section>
  );
};

const TagsSection = () => {
  return (
    <section className="tags" aria-labelledby="tag-label">
      <div className="container">
        <h2 className="headline headline-2 section-title" id="tag-label">
          <span className="span">Popular Tags</span>
        </h2>

        <p className="section-text">Most searched keywords</p>

        <ul className="grid-list">
          <li>
            <button className="card tag-btn">
              <img
                src="images/tag1.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Travel"
              />

              <p className="btn-text">Travel</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag2.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Culture"
              />

              <p className="btn-text">Culture</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag3.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Lifestyle"
              />

              <p className="btn-text">Lifestyle</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag4.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Fashion"
              />

              <p className="btn-text">Fashion</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag5.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Food"
              />

              <p className="btn-text">Food</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag6.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Space"
              />

              <p className="btn-text">Space</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag7.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Animal"
              />

              <p className="btn-text">Animal</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag8.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Minimal"
              />

              <p className="btn-text">Minimal</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag9.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Interior"
              />

              <p className="btn-text">Interior</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag10.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Plant"
              />

              <p className="btn-text">Plant</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag11.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Nature"
              />

              <p className="btn-text">Nature</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="images/tag12.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Business"
              />

              <p className="btn-text">Business</p>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};


const RecentPost = () => {
  return (
    <section
      className="section recent-post"
      id="recent"
      aria-labelledby="recent-label"
    >
      <div className="container">
        <div className="post-main">
          <h2 className="headline headline-2 section-title">
            <span className="span">Recent posts</span>
          </h2>
          <p className="section-text">Don't miss the latest trends</p>
          <ul className="grid-list">
            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <img
                    src="images/recent-post-1.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>
                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>
                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>
                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>
                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>
                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* Other list items */}
            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <img
                    src="images/recent-post-2.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>
                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>
                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>
                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>
                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>
                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <img
                    src="images/recent-post-3.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>
                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>
                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>
                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>
                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>
                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <img
                    src="images/recent-post-4.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>
                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>
                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>
                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>
                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>
                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <img
                    src="images/recent-post-5.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>
                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>
                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>
                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>
                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>
                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <nav aria-label="pagination" className="pagination">
            <a href="#" className="pagination-btn" aria-label="previous page">
              <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
            </a>
            <a href="#" className="pagination-btn">
              1
            </a>
            <a href="#" className="pagination-btn">
              2
            </a>
            <a href="#" className="pagination-btn">
              3
            </a>
            <a href="#" className="pagination-btn" aria-label="more page">
              ...
            </a>
            <a href="#" className="pagination-btn" aria-label="next page">
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </nav>
        </div>
        <div className="post-aside grid-list">
          <div className="card aside-card">
            <h3 className="headline headline-2 aside-title">
              <span className="span">Popular Posts</span>
            </h3>
            <ul className="popular-list">
              <li>
                <div className="popular-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 64, "--height": 64 }}
                  >
                    <img
                      src="images/popular-post-1.jpg"
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Exploring Beautiful Beaches in Bali"
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="headline headline-4 card-title">
                      <a href="#" className="link hover-2">
                        Exploring Beautiful Beaches in Bali
                      </a>
                    </h4>
                    <div className="card-wrapper">
                      <div className="wrapper">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="span">5 mins read</span>
                      </div>
                      <div className="wrapper">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="span">May 10, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Other list items */}
              <li>
                <div className="popular-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 64, "--height": 64 }}
                  >
                    <img
                      src="images/popular-post-2.jpg"
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Exploring Beautiful Beaches in Bali"
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="headline headline-4 card-title">
                      <a href="#" className="link hover-2">
                        Exploring Beautiful Beaches in Bali
                      </a>
                    </h4>
                    <div className="card-wrapper">
                      <div className="wrapper">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="span">5 mins read</span>
                      </div>
                      <div className="wrapper">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="span">May 10, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="popular-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 64, "--height": 64 }}
                  >
                    <img
                      src="images/popular-post-3.jpg"
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Exploring Beautiful Beaches in Bali"
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="headline headline-4 card-title">
                      <a href="#" className="link hover-2">
                        Exploring Beautiful Beaches in Bali
                      </a>
                    </h4>
                    <div className="card-wrapper">
                      <div className="wrapper">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="span">5 mins read</span>
                      </div>
                      <div className="wrapper">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="span">May 10, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="popular-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 64, "--height": 64 }}
                  >
                    <img
                      src="images/popular-post-4.jpg"
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Exploring Beautiful Beaches in Bali"
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="headline headline-4 card-title">
                      <a href="#" className="link hover-2">
                        Exploring Beautiful Beaches in Bali
                      </a>
                    </h4>
                    <div className="card-wrapper">
                      <div className="wrapper">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="span">5 mins read</span>
                      </div>
                      <div className="wrapper">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="span">May 10, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="card aside-card">
            <h3 className="headline headline-2 aside-title">
              <span className="span">Last Comments</span>
            </h3>
            <ul className="comment-list">
              <li>
                <div className="comment-card">
                  <blockquote className="comment-quote">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </blockquote>
                  <div className="comment-info">
                    <img
                      src="images/author-6.png"
                      width="40"
                      height="40"
                      loading="lazy"
                      alt="Commenter Profile"
                      className="commenter-avatar"
                    />
                    <div className="commenter-details">
                      <span className="span comment-author">John Doe</span>
                      <span className="span comment-date">May 20, 2023</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="comment-card">
                  <blockquote className="comment-quote">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </blockquote>
                  <div className="comment-info">
                    <img
                      src="images/author-7.png"
                      width="40"
                      height="40"
                      loading="lazy"
                      alt="Commenter Profile"
                      className="commenter-avatar"
                    />
                    <div className="commenter-details">
                      <span className="span comment-author">John Doe</span>
                      <span className="span comment-date">May 20, 2023</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="comment-card">
                  <blockquote className="comment-quote">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </blockquote>
                  <div className="comment-info">
                    <img
                      src="images/author-8.png"
                      width="40"
                      height="40"
                      loading="lazy"
                      alt="Commenter Profile"
                      className="commenter-avatar"
                    />
                    <div className="commenter-details">
                      <span className="span comment-author">John Doe</span>
                      <span className="span comment-date">May 20, 2023</span>
                    </div>
                  </div>
                </div>
              </li>
              {/* Other list items */}
            </ul>
               
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="images/logo.svg" width="119" height="37" loading="lazy" alt="Wren logo" />
              </a>
              <p className="footer-text">
                When an unknown prnoto sans took a galley and scrambled it to make specimen book not only five When an
                unknown prnoto sans took a galley and scrambled it to five centurie.
              </p>
              <p className="footer-list-title">Address</p>
              <address className="footer-text address">
                123 Main Street
                <br />
                New York, NY 10001
              </address>
            </div>
            <div className="footer-list">
              <p className="footer-list-title">Categories</p>
              <ul>
                <li>
                  <a href="#" className="footer-link hover-2">
                    Action
                  </a>
                </li>
                {/* Add more list items */}
              </ul>
            </div>
            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>
              <p className="footer-text">
                Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.
              </p>
              {/* Add the input fields and button */}
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              &copy; Developed by <a href="#" className="copyright-link">codewithsadee.</a>
            </p>
            {/* Add the social icons */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn onClick={scrollToTop}>
      <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
    </a>
  );
};


function Main() {
  return (
    <>
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </Helmet>

      <Script />

      <HeaderSection />
      <HeroSection />
      <TopicsSection />
      <FeaturedPost />
      <TagsSection />
      <RecentPost />
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default Main;
