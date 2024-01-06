'use client';

//Tutorial Video Link: https://www.youtube.com/watch?v=y6z8MYjZ_J8
//Tutorial video link: https://www.youtube.com/watch?v=y6z8MYjZ_J8

import { useEffect, useState } from 'react';
// import { gsap } from 'gsap';

import './cursorHoverMask.scss';

import useMousePosition from '@/app/hooks/useMousePosition';

const HoverMask = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenClicked, setIsOpenClicked] = useState(false);

  useEffect(() => {
    const overlay = document.querySelector('.overlay');

    // IF WE USE THIS FORMATE TO GET DOM ELEMENT THEN IT WILL WORK SLOWLY WE NEED TO UP USE THE NEXTJS/REACT FOR MORMATE TO GET VERTUL DOM ELEMENT
    //const hoverH1 = document.querySelector('.hover-h1');
    //const isOpen = document.querySelector('.is-open');
    // span.addEventListener('click', () => {
    //   overlay.classList.toggle('is-open');
    //   //setIsOpenClicked(!isOpenClicked);
    // });

    //console.log('isOpenClicked', isOpenClicked);
    if (isOpenClicked) {
      overlay.style.setProperty('clip-path', `circle(200% at 100% 100%)`);
      overlay.style.setProperty('transition', `clip-path .5s ease-in-out`);
      overlay.style.setProperty(
        'transition-timing-function',
        `cubic-bezier(1, -0.01, 0.01, 0.99)`
      );
    } else {
      const clientX = Math.round((x / window.innerWidth) * 100);
      const clientY = Math.round((y / window.innerHeight) * 100);

      // IF WE USE THIS FORMATE TO GET DOM ELEMENT THEN IT WILL WORK SLOWLY WE NEED TO UP USE THE NEXTJS/REACT FOR MORMATE TO GET VERTUL DOM ELEMENT
      // hoverH1.addEventListener('mouseenter', () => {
      //   setIsHovered(true);
      // });
      // hoverH1.addEventListener('mouseleave', () => {
      //   setIsHovered(false);
      // });

      const size = isHovered ? 200 : 40;
      overlay.style.setProperty(
        'clip-path',
        `circle(${size}px at ${clientX}% ${clientY}%)`
      );
    }

    // IF WE USE THIS FORMATE TO GET DOM ELEMENT THEN IT WILL WORK SLOWLY WE NEED TO UP USE THE NEXTJS/REACT FOR MORMATE TO GET VERTUL DOM ELEMENT
    //another way to get mousemove event
    // window.addEventListener('mousemove', (e) => {
    //   const { clientX, clientY } = e;
    // }

    //if we want to use GSAP tthen follow blow
    //in css clip-path: circle(100px at var(--x, 50%) var(--y,  50%);
    //   gsap.to(overlay, {
    //     '--x': `${x}%`,
    //     '--y': `${y}%`,
    //     duration: 0.3,
    //     ease: 'sine.out',
    //   });
    // });
  }, [x, y, isHovered, isOpenClicked]);

  return (
    <div className="">
      <div className="h-screen w-full text-6xl font-extrabold bg-slate-500 flex items-center justify-center">
        Header Space
      </div>

      {/* overlay  */}
      <div className=" relative">
        <div className="section">
          <h1
            className=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            My proficiency extends to various frameworks and libraries,
            including React, Node.js, and Django, enabling me to create dynamic
            and scalable web applications.
          </h1>
          <span
            className="hover-btn"
            onClick={() => setIsOpenClicked(!isOpenClicked)}
          >
            <svg
              viewBox="0 0 62 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
            </svg>
          </span>
        </div>

        <div className="section overlay">
          <h1
            className="hover-h1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            As a seasoned developer, I am passionate about crafting innovative
            and efficient solutions in the ever-evolving realm of technology. My
            journey in the industry.
          </h1>
          <span
            className="hover-btn2"
            onClick={() => setIsOpenClicked(!isOpenClicked)}
          >
            <svg
              viewBox="0 0 62 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
            </svg>
          </span>
        </div>
      </div>

      {/* footer  */}
      <div className="h-screen w-full text-6xl font-extrabold bg-red-300 flex items-center justify-center mt-10">
        Footer Space
      </div>
    </div>
  );
};

export default HoverMask;
