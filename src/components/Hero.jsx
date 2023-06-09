import {motion} from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className = 'relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-100 h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hello, I'm <span className="text-[#915eff]"> PULKIT </span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span className="blue-text-gradient"> MERN DEVELOPER </span> who is also 
            currently <br className="sm:block hidden"/> into <span className="blue-text-gradient"> APP DEVELOPMENT </span> 
            with flutter and develop <br className="sm:block hidden"/> web applications and UIs. 
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}

              className="w-3 h-5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero