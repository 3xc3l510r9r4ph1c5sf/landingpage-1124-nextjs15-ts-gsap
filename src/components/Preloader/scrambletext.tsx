import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);
useEffect(() => {
  const tl = gsap.timeline({ defaults: { duration: 2, ease: 'none' } });

  tl.to('#scrambleText', {
    duration: 2,
    scrambleText: {
      text: 'Animate the scrambling of text.',
      chars: 'lowerCase',
      speed: 0.3,
      revealDelay: 0.8,
      tweenLength: false,
    },
  });
}, [showContent]);

if (!showContent) {
  return null;
}
