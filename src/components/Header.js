import React from "react";

function Header() {
    return (
        <div style={{
            fontFamily:'Nunito', 
            color:'#FFEBBF',
            filter: 'drop-shadow(0 13px 75px rgba(0,0,0,25))',}}>
                <ul style={{
                    display:'flex', 
                    listStyleType:'none', 
                    alignItems:'center', 
                    justifyContent:'end', 
                    fontSize:'20px',}}>

                    <img src='/shiblogo.svg' alt='logo' style={{
                        width:'180px', 
                        paddingRight:'700px'}}/>

                    <img src='/ellipseblue.svg' alt='blue dot' style={{
                        scale:'0.5'}}/>

                    <li style={{
                        paddingRight:'20px', 
                        paddingLeft:'15px',}}>

                    about

                    </li>

                    <img src='/ellipsesand.svg' alt='sand dot' style={{
                        scale:'0.5'}}/>
                    <li style={{
                        paddingRight:'20px', 
                        paddingLeft:'15px',}}>

                    past litters

                    </li>

                    <img src='/ellipseorange.svg' alt='orange dot' style={{
                        scale:'0.5'}}/>
                    <li style={{
                        paddingRight:'20px', 
                        paddingLeft:'15px',}}>

                    puppies

                    </li>

                    <img src='/ellipseblue.svg' alt='blue dot' style={{
                        scale:'0.5'}}/>
                    <li style={{
                        paddingRight:'20px', 
                        paddingLeft:'15px',}}>

                    contact
                    
                    </li>
                </ul>
        </div>
    );
}

export default Header;