import HeroArrow from './heroArrow';

const Hero: React.FC = () => {
  return (
    <section className="items -z-1 sticky top-[var(--navbar-height)] h-[var(--hero-section--height)] bg-hero-dark text-details-white">
      <h1 className="main-heading absolute bottom-9 left-[2.29rem] text-balance md:left-[4.38rem]">
        <HeroArrow /> Create an Impact
      </h1>
    </section>
  );
};

export default Hero;
