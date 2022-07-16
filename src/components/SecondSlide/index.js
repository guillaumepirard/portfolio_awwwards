// == Import
import {useState, useEffect, useRef, createRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import './styles.scss';

// == Composant
const SecondSlide = () => {
  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const secondSlideElement = useRef([]);
  const secondSlideElementLeft = useRef([]);
  const secondSlideElementRight = useRef([]);

  useEffect(() => {
    gsap.fromTo(secondSlideElementLeft.current, {
      translateX: '47%',
      stagger: 1.4,
    },
    {
      duration: 2,
      translateX: '0%',
      stagger: 1.4,
      scrollTrigger: {
        trigger: secondSlideElementLeft.current[0],
        start: 'middle 65%',
      },
    });
    gsap.fromTo(secondSlideElementRight.current, {
      translateX: '-47%',
      stagger: 1.4,
    },
    {
      duration: 2,
      translateX: '0%',
      stagger: 1.4,
      scrollTrigger: {
        trigger: secondSlideElementRight.current[0],
        start: 'middle 65%',
      },
    });
  }, []);

  return (
    <div className="secondSlide">
      <div className="secondSlide-header">
        <p className="secondSlide-header_title">What we do</p>
        <h2 className="secondSlide-header_copy">
          <span>We provide clients</span>
          <br />
          <span>with stunning Crafty web</span>
          <br />
          <span>solutions, developed</span>
          <br />
          <span>with skill & passion.</span>
        </h2>
        <div className="secondSlide-header_logo">
          <span>ICON</span>
        </div>
      </div>
      <div className="secondSlide-container">
        <div className="secondSlide-container_element" ref={(element) => {secondSlideElement.current[0] = element;}}>
          <div className="secondSlide-container_element-left" ref={(element) => {secondSlideElementLeft.current[0] = element;}}>
            <p>icon</p>
            <div className="secondSlide-container_element-left_content">
              <p className="secondSlide-container_element-left_content-title">Craft CMS</p>
              <p className="secondSlide-container_element-left_content-copy">We are focused on developing, from start to finish, web solutions with Craft CMS, an easy to use content management system where admins can alter or add content to a website.</p>
            </div>
          </div>
          <div className="secondSlide-container_element-right" ref={(element) => {secondSlideElementRight.current[0] = element;}}>
            <div className="secondSlide-container_element-right_content">
              <div className="secondSlide-container_element-right_content-title">We are expert in</div>
              <div className="secondSlide-container_element-right_content-copy">craft cms</div>
            </div>
          </div>
        </div>
        <div className="secondSlide-container_element" ref={(element) => {secondSlideElement.current[1] = element;}}>
          <div className="secondSlide-container_element-left" ref={(element) => {secondSlideElementLeft.current[1] = element;}}>
            <p>icon</p>
            <div className="secondSlide-container_element-left_content">
              <p className="secondSlide-container_element-left_content-title">Craft CMS</p>
              <p className="secondSlide-container_element-left_content-copy">We are focused on developing, from start to finish, web solutions with Craft CMS, an easy to use content management system where admins can alter or add content to a website.</p>
            </div>
          </div>
          <div className="secondSlide-container_element-right" ref={(element) => {secondSlideElementRight.current[1] = element;}}>
            <div className="secondSlide-container_element-right_content">
              <div className="secondSlide-container_element-right_content-title">We are expert in</div>
              <div className="secondSlide-container_element-right_content-copy">craft cms</div>
            </div>
          </div>
        </div>
        <div className="secondSlide-container_element" ref={(element) => {secondSlideElement.current[2] = element;}}>
          <div className="secondSlide-container_element-left" ref={(element) => {secondSlideElementLeft.current[2] = element;}}>
            <p>icon</p>
            <div className="secondSlide-container_element-left_content">
              <p className="secondSlide-container_element-left_content-title">Craft CMS</p>
              <p className="secondSlide-container_element-left_content-copy">We are focused on developing, from start to finish, web solutions with Craft CMS, an easy to use content management system where admins can alter or add content to a website.</p>
            </div>
          </div>
          <div className="secondSlide-container_element-right" ref={(element) => {secondSlideElementRight.current[2] = element;}}>
            <div className="secondSlide-container_element-right_content">
              <div className="secondSlide-container_element-right_content-title">We are expert in</div>
              <div className="secondSlide-container_element-right_content-copy">craft cms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Export
export default SecondSlide;
