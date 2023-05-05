import Link from 'next/link';
import ThemeToggler from './toggle';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className={`sticky  backdrop:blur-lg  top-0 z-  30 w-full  ${
        animateHeader ? '' : 'backdrop-filter   backdrop-blur-sm  fixed top-0 z-10 trasition ease-in-out duration-5s00s'
      }`}
    >
      <motion.div className='progress-bar' style={{ scaleX }} />

      <div
        className='rowDiv flex flex-row items-center justify-evenly mt-5  
'
      >
        <Link href={'/'}>
          {' '}
          <div className='footerName flex flex-row mt-5'>
            <h1 className='text-4xl md:text-2xl'>Abdullah</h1>{' '}
            <h1 className='text-4xl text-red-600	 ml-2 md:text-2xl'>Gümüş</h1>
          </div>
        </Link>

        <div className='ml-7 flex flex-row  '>
          <ThemeToggler></ThemeToggler>
        </div>
      </div>
      <br></br>
      <motion.div
        className='progress-bar  top-0 left-0 right-0 h-0.5 origin-left sticky  z-30	 bg-[#960018] '
        style={{ scaleX }}
      />
    </div>
  );
};

export default Header;
