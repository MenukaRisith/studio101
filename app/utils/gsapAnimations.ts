import { gsap } from "gsap";

export const animateHeroSection = () => {
  gsap.fromTo(
    "#hero",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
  );
};

export const animateClientLogos = () => {
  gsap.to(".client-logo", {
    scale: 1.1,
    duration: 0.5,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  });
};

export const animatePortfolioCards = () => {
  gsap.fromTo(
    ".portfolio-card",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
  );
};
