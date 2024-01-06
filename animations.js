import gsap from 'gsap';

//Tutorial Github Link: https://github.com/josiah-brown/page-transitions-with-gasp-and-next
//Tutorial Blog Link: https://medium.com/@josiah.webdev/page-transitions-with-gsap-next-js-app-router-5508cee43a80

export const animatePageIn = () => {
  const transitionElement = document.getElementById('transition-element');

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      yPercent: 0, // Change xPercent to yPercent
    })
      .to(transitionElement, {
        yPercent: 100, // Change xPercent to yPercent
        duration: 0.5,
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: '100vh',
          borderTopRightRadius: '100vh',
          duration: 0.2,
        },
        '<'
      );
  }
};

export const animatePageOut = ({ href, router }) => {
  const animationWrapper = document.getElementById('transition-element');

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      yPercent: 100, // Change xPercent to yPercent

      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    })
      .to(animationWrapper, {
        yPercent: 0, // Change xPercent to yPercent
        duration: 0.5,
        onComplete: () => {
          console.log(href);
          router.push(href);
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: '0',
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          duration: 0.4,
        },
        '<'
      );
  }
};
