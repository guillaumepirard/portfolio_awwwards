/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-expressions */
// == Import
import {useState, useEffect, useRef} from 'react';
import {gsap} from 'gsap';

import './styles.scss';

// == Composant
const Curtains = () => {
  const [toggle, setToggle] = useState(false);

  const changeState = () => {
    setToggle(!toggle);
  };

  const leftCurtain = useRef(null);
  const middleCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const curtain = useRef(null);

  useEffect(() => {
    gsap.to(leftCurtain.current, {
      delay: 3,
      translateY: '100%',
      duration: 1,
    });
    gsap.to(middleCurtain.current, {
      translateY: '100%',
      duration: 1,
      delay: 3.333,
    });
    gsap.to(rightCurtain.current, {
      translateY: '100%',
      duration: 1,
      delay: 3.666,
    });
    gsap.to(curtain.current, {
      delay: 4.666,
      display: 'none',
    });
  }, []);

  return (
    <div className="curtains" ref={curtain}>
      <div className="curtains-element curtains-element-left" onClick={changeState} ref={leftCurtain}></div>
      <div className="curtains-element curtains-element-middle" ref={middleCurtain}>
        <h2 className="title">Hello world</h2>
      </div>
      <div className="curtains-element curtains-element-right" ref={rightCurtain}></div>
    </div>
  );
};

// == Export
export default Curtains;
