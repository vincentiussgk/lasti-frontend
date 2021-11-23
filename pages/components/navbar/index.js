import React, { useEffect, useState } from 'react';
import styles from "./Navbar.module.css";
import Menu from "./popups/menu";
// import ResponsiveDialog from "./ResponsiveDialog";

function Navbar({ sticky }) {

    const [open, setOpen] = useState(false);
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [subsectionOpen, setSubsectionOpen] = useState("")

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleBurgerOpen = () => {
        setBurgerOpen(true);
    }
    const handleBurgerClose = () => {
        setBurgerOpen(false);
    }

    const handleSubChange = section => {
        setSubsectionOpen(section)
    }

    return (
        <nav className={styles.navbarContainerOpaque}>
                <div className={styles.menu}>
                    <img src = "PolluxLogo.png" className={styles.logo}/>
                    <div className={styles.iecomTitle}>
                        Pollux Parking
                    </div>
                </div>
                {/* >=768: Events, Comp, login 
                        <768: Burger */}

                <div id={styles.navIcon1} className={
                        burgerOpen && styles.open
                    }
                    onClick={() => setBurgerOpen(prevState => !prevState)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                

            <Menu 
                open={open} 
                handleClose={handleClose} 
                heading="LOGIN"
                text="You couldn’t submit your registration yet. Please check you internet connection."
                button="LOGIN"
            />

            {/* <ResponsiveDialog 
                open={burgerOpen} 
                handleClose={handleBurgerClose} 
                handleLoginOpen={handleOpen}
            />  */}

        </nav>
    )
}

export default Navbar