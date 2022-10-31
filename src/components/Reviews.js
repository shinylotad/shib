import React from "react";
import { motion } from 'framer-motion';

function Reviews() {
    return ( 
        <div style={{
            fontFamily:'Montserrat', 
            paddingLeft:'100px',
            paddingRight:'100px',
            marginTop: '220px',
            color:'#BF6F60',}}>

            <h1 style={{
                fontWeight:'700',
                fontSize:'100px',
                letterSpacing:'0.4rem',
                textAlign: 'left',}}>

                    what <br/> people <br/> think. . . <br/>
                    人々がどう思うか

                </h1>
            <h2 style={{
                fontWeight:'600',
                letterSpacing:'0.2rem',
                textAlign:'right',
                paddingRight:'100px',
            }}>
                a few cherished words from our happy customers
            </h2>

            <div style={{
                display:'flex',
                marginTop:'145px',
            }}>
                <div style={{
                    display:'flex',
                    columnGap:'20px',
                    flexDirection:'row',
                    overflowX:'scroll',
                }}>
                    <motion.div 
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.0 }}>

                    <div style={{
                        color:'#FFFFFF',
                        fontSize:'35px'
                    }}>
                        <img src='/review1.svg' alt='review 1'/>

                        <div style={{
                            backgroundColor:'#FFD680',
                            maxHeight:'500px',
                            maxWidth:'424px',
                            marginTop:'-63px',
                            padding:'20px',
                        }}>

                            <h1>Taro</h1>
                            <h3 style={{
                                textAlign:'right',
                            }}>太郎</h3>
                            <p style={{
                                fontSize:'20px',
                                textAlign:'center',
                        }}>bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong<br/></p>

                        </div>
                    </div>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.0 }}>

                    <div style={{
                        color:'#000000',
                        fontSize:'35px'
                    }}>
                        <img src='/review2.svg' alt='review 2'/>

                        <div style={{
                            backgroundColor:'#FFEBBF',
                            maxHeight:'500px',
                            maxWidth:'424px',
                            marginTop:'-63px',
                            padding:'20px',
                        }}>

                            <h1>mochi</h1>
                            <h3 style={{
                                textAlign:'right',
                            }}>もち米</h3>
                            <p style={{
                                fontSize:'20px',
                                textAlign:'center',
                        }}>bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong<br/></p>

                        </div>
                    </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.0 }}>

                    <div style={{
                        color:'#FFFFFF',
                        fontSize:'35px'
                    }}>

                        <img src='/review3.svg' alt='review 3'/>

                        <div style={{
                            backgroundColor:'#BF6F60',
                            maxHeight:'500px',
                            maxWidth:'424px',
                            marginTop:'-63px',
                            padding:'20px',
                        }}>

                            <h1>Donald</h1>
                            <h3 style={{
                                textAlign:'right',
                            }}>ドナルド</h3>
                            <p style={{
                                fontSize:'20px',
                                textAlign:'center',
                        }}>quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack <br/></p>

                        </div>
                    </div>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.0 }}>

                    <div style={{
                        color:'#000000',
                        fontSize:'35px'
                    }}>
                        <img src='/review1.svg' alt='review 1'/>

                        <div style={{
                            backgroundColor:'#E6F6FF',
                            maxHeight:'500px',
                            maxWidth:'424px',
                            marginTop:'-63px',
                            padding:'20px',
                        }}>

                            <h1>baljeeeet</h1>
                            <h3 style={{
                                textAlign:'right',
                            }}>??</h3>
                            <p style={{
                                fontSize:'20px',
                                textAlign:'center',
                        }}>bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong<br/></p>

                        </div>
                    </div>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.0 }}>

                    <div style={{
                        color:'#000000',
                        fontSize:'35px'
                    }}>

                        <img src='/review2.svg' alt='review 2'/>

                        <div style={{
                            backgroundColor:'#FFEBBF',
                            maxHeight:'500px',
                            maxWidth:'424px',
                            marginTop:'-63px',
                            padding:'20px',
                        }}>

                            <h1>mochi</h1>
                            <h3 style={{
                                textAlign:'right',
                            }}>もち米</h3>
                            <p style={{
                                fontSize:'20px',
                                textAlign:'center',
                        }}>bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong bong<br/></p>

                        </div>

                    </div>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.0 }}>

                    <div style={{
                        color:'#FFFFFF',
                        fontSize:'35px'
                    }}>

                        <img src='/review3.svg' alt='review 3'/>

                                            <div style={{
                            backgroundColor:'#BF6F60',
                            maxHeight:'500px',
                            maxWidth:'424px',
                            marginTop:'-63px',
                            padding:'20px',
                        }}>

                            <h1>Donald</h1>
                            <h3 style={{
                                textAlign:'right',
                            }}>ドナルド</h3>
                            <p style={{
                                fontSize:'20px',
                                textAlign:'center',
                        }}>quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack <br/></p>
                        </div>   
                        
                    </div>  
                    </motion.div>               
                </div>
            </div>
            
        </div>
    );
}

export default Reviews;