import React, { useEffect } from "react";

const Script = () => {
  useEffect(() => {
    const addEventOnElements = function (elements, eventType, callback) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    };


    
    const toggleNav = () => {
      const navbar = document.querySelector("[data-navbar]");
      const navTogglers = document.querySelectorAll("[data-nav-toggler]");
      navbar.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };

    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    const moveSliderItem = () => {
      const sliderContainer = document.querySelector("[data-slider-container]");
      const slider = document.querySelector("[data-slider]");
      const currentSlidePos = 0; // Define the initial slide position
      const totalSliderVisibleItems = Number(
        getComputedStyle(slider).getPropertyValue("--slider-items")
      );
      const totalSlidableItems =
        sliderContainer.childElementCount - totalSliderVisibleItems;
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    };

    const slideNext = () => {
      const sliderContainer = document.querySelector("[data-slider-container]");
      const slider = document.querySelector("[data-slider]");
      const sliderPrevBtn = document.querySelector("[data-slider-prev]");
      const sliderNextBtn = document.querySelector("[data-slider-next]");
      let currentSlidePos = 0; // Define the initial slide position
      const totalSliderVisibleItems = Number(
        getComputedStyle(slider).getPropertyValue("--slider-items")
      );
      const totalSlidableItems =
        sliderContainer.childElementCount - totalSliderVisibleItems;

      const slideEnd = currentSlidePos >= totalSlidableItems;

      if (slideEnd) {
        currentSlidePos = 0;
      } else {
        currentSlidePos++;
      }

      moveSliderItem();
    };

    const slidePrev = () => {
      const sliderContainer = document.querySelector("[data-slider-container]");
      const slider = document.querySelector("[data-slider]");
      const sliderPrevBtn = document.querySelector("[data-slider-prev]");
      const sliderNextBtn = document.querySelector("[data-slider-next]");
      let currentSlidePos = 0; // Define the initial slide position
      const totalSliderVisibleItems = Number(
        getComputedStyle(slider).getPropertyValue("--slider-items")
      );
      const totalSlidableItems =
        sliderContainer.childElementCount - totalSliderVisibleItems;

      if (currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
      } else {
        currentSlidePos--;
      }

      moveSliderItem();
    };

    const handleResize = () => {
      const slider = document.querySelector("[data-slider]");
      const sliderContainer = document.querySelector("[data-slider-container]");
      const totalSliderVisibleItems = Number(
        getComputedStyle(slider).getPropertyValue("--slider-items")
      );
      const totalSlidableItems =
        sliderContainer.childElementCount - totalSliderVisibleItems;

      moveSliderItem();
    };

    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const sliderNextBtn = document.querySelector("[data-slider-next]");
    const sliderPrevBtn = document.querySelector("[data-slider-prev]");

    addEventOnElements(navTogglers, "click", toggleNav);
    window.addEventListener("scroll", handleScroll);
    sliderNextBtn.addEventListener("click", slideNext);
    sliderPrevBtn.addEventListener("click", slidePrev);
    window.addEventListener("resize", handleResize);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};

export default Script;
