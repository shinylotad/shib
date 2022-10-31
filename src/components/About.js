import React from "react";
import { motion } from "framer-motion";


function About() {
    return (  
        <div 
            style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center', 
                marginTop:'-20px', 
                fontFamily:'Montserrat',
                fontWeight: 'light', 
                color:'#000000', 
                fontSize:'12px', }}
            >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>

                <div style={{ 
                    letterSpacing:'1rem',
                    position:'relative',
                    }}>
                        
                <h1 style={{
                    
                    fontSize:'40px',
                    fontWeight:'lighter',
                    fontStyle:'italic',
                    color:'#FFEBBF'}}>
                        what we are all <b style={{
                            fontWeight:'600', 
                            fontStyle:'normal', 
                            letterSpacing:'0.4rem'}}>
                                about</b>
                                </h1>
                </div>
            </motion.div>

            <div style={{
                display:'flex', 
                flexDirection:'row',
                gap:'0px', 
                paddingRight:'20px',
                filter: 'drop-shadow(0 80px 400px rgba(255,255,255,25))'
                }}>
                
                <img src='/aboutshib.svg' style={{
                    height:'564px',
                    position:'relative',
                    top:'70px'}} alt='nice background m8'/>
                
                <div style={{
                    backgroundColor:'rgba(191,111,96,1)', 
                    maxWidth:'900px', 
                    maxHeight:'564px',  
                    marginTop:'70px',
                    color:'#FFEBBF'}}>
                    
                    <h1 style={{
                        fontSize:'40px',
                        paddingLeft:'60px',
                        }}> 
                        
                        Tom Tommy 
                    
                    </h1>
                    <p style={{
                        padding:'60px', 
                        fontSize:'24px', 
                        textAlign:'right',
                        justifyContent:'center',
                       }}>

                        <b>Doggo</b> ipsum  thicc noodle horse you are doing me the shock. 
                        Much ruin diet adorable doggo floofs long woofer lotsa pats stop it fren doggo, borking doggo tungg what a nice floof snoot. Super chub long doggo porgo wow such tempt, shoober. Wrinkler many pats very jealous pupper pupperino borkf extremely cuuuuuute h*ck shoob, long doggo shibe you are doin me a concern maximum borkdrive puggorino big ol. I am bekom fat wow very biscit dat tungg tho, puggorino. Fluffer what a nice floof super chub woofer maximum borkdrive long bois fat boi, blep many pats very hand that feed shibe maximum borkdrive. aaaaaaaaaaaaaaaaaaaaaaaaaaaa

                    </p>
                </div> 
            </div>
            <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>

                <div style={{
                    letterSpacing:'0.1rem',
                    paddingTop: '3px',
                    paddingBottom: '3px', 
                    paddingLeft:'20px',
                    paddingRight:'20px'}}>

            </div>
            </motion.div>
        </div>
    );
}

export default About;