import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Landing from './components/Landing';
import About from './components/About';
import Reviews from './components/Reviews';
import { motion } from 'framer-motion';
import Available from './components/Available';

function App() {
  return (

      <motion.div>

        <Parallax 
          pages={3} 
          style={{
            backgroundImage:`url(cottonshib.jpg)`, 
            backgroundSize:'cover',}}>

          <ParallaxLayer 
            speed={0}
            style={{
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' , 
              height:'100vh',}}>

                <Landing/>


          </ParallaxLayer>
          
          <ParallaxLayer 
            offset={.99}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(about.svg)`,
              backgroundSize: 'cover',
              filter: 'drop-shadow(0 13px 50px rgba(0,0,0,25))',
            }}>

              <About/>
              
              <Reviews/>
              
          </ParallaxLayer>
          
          <ParallaxLayer 
            offset={2}
            speed={0.5}
            factor={4}
            style={{
              backgroundImage: `url(footer.svg)`,
              backgroundSize: 'contain',
              filter: 'drop-shadow(0 10px 1000px rgba(0,0,0,0.5))',
            }}>

            <Available/>
            
         </ParallaxLayer>

      </Parallax>
    </motion.div>
  );
}

export default App;
