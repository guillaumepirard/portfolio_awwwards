/* eslint-disable no-unused-expressions */
// == Import
import {useState, useEffect, useRef} from 'react';
import {gsap} from 'gsap';

import './styles.scss';

// == Composant
const FirstSlide = () => {
  const [toggle, setToggle] = useState(false);

  const changeState = () => {
    setToggle(!toggle);
  };

  const cardRef = useRef(null);

  useEffect(() => {
    toggle
      ? gsap.to(cardRef.current, {
        scale: 1.5,
        rotate: 360,
        duration: 1.2,
      })
      : gsap.to(cardRef.current, {
        scale: 1,
        rotate: 0,
        duration: 1.2,
      });
  }, [toggle]);

  return (
    <div className="firstSlide">
      <div className="firstSlide-header">Briock</div>
      <div className="firstSlide-container">
        <div className="firstSlide-container_left" onClick={changeState} ref={cardRef}>
          <div className="firstSlide-container_left-top">
            <p>Briock</p>
            <p>LOGO</p>
          </div>
          <div className="firstSlide-container_left-bottom">
            <p>See our services</p>
            <p>ICON</p>
          </div>
        </div>
        <div className="firstSlide-container_right">
          <div className="firstSlide-container_right-top">
            <div className="firstSlide-container_right-top_element firstSlide-container_right-top_element-first">
              <p>Work</p>
              <p>ICON</p>
            </div>
            <div className="firstSlide-container_right-top_element  firstSlide-container_right-top_element-second">
              <p>About US</p>
              <p>ICON</p>
            </div>
          </div>
          <div className="firstSlide-container_right-bottom">
            <p>Contact US</p>
            <p>ICON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Export
export default FirstSlide;
