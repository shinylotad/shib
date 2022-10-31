import React from "react";
import { motion } from "framer-motion";

function Landing () {
    return (
        <div style={{
            position:'relative', 
            display:'inline-block', 
            fontFamily: 'Nunito', 
            color: '#FFEBBF', 
            fontSize: '40px',}}>

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>

            <img src='/speechbubble.svg' alt="speech"/>

            <p style={{
                position:'relative', 
                left:'220px',
                bottom:'190px',
                maxWidth: 'fit-content',}}>

                    welcome..<br/>

            </p>

            <p style={{
                fontFamily:'Montserrat', 
                position: 'relative', 
                fontWeight: '1,100', 
                fontStyle: 'italic',
                left:'110px', 
                bottom:'220px', 
                maxWidth: 'fit-content', 
                letterSpacing:'0.4rem'}}>
                    
                   our shibbies
            </p>
            
            </motion.div>
        </div>
    );
}

export default  Landing;