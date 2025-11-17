import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Flip } from 'gsap/Flip';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';
import { PhysicsPropsPlugin } from 'gsap/PhysicsPropsPlugin';
import { GSDevTools } from 'gsap/GSDevTools';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    Flip,
    Draggable,
    InertiaPlugin,
    Observer,
    SplitText,
    ScrambleTextPlugin,
    TextPlugin,
    MorphSVGPlugin,
    DrawSVGPlugin,
    MotionPathPlugin,
    Physics2DPlugin,
    PhysicsPropsPlugin,
    GSDevTools
  );
}

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

gsap.defaults({
  ease: 'power2.out',
  duration: 0.8,
});

export { gsap };