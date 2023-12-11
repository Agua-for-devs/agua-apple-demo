import React from 'react';


import styles from './screen.module.css';

/**
 * Screen component.
 * @component
 * @type {React.FC}
 * 
 * @returns {React.ReactElement} The Screen component.
 */
const Screen = () =>{
    
    
    
    function aguaRender() {
        return(
            <main custom-agua-item="screen"  className={styles.Screen}>
                

            </main>
        );
    };

    return aguaRender();
}

export default Screen;
            