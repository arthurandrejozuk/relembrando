import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const ModalStyled = styled(motion.div)`
    
    display: flex; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 0; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4);
    scroll-behavior: auto;
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }
`


export default function Modal({open, children}: {open: boolean, children: React.ReactNode}) {
    
  
    
    return (
        <AnimatePresence>
            {open ? (
                <ModalStyled exit={{opacity:0}} initial='hidden' animate='visible' variants={
                    {
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1
                        }
                    }
                }>
                    {children}
                </ModalStyled>
            )
                : null}   
        </AnimatePresence>
    )
}