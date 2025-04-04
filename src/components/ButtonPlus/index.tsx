import styled from "styled-components"
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

const ButtonPlusStyled = styled(motion.div)`

        position: fixed;
        left: 10%;
        bottom: 36px;
        background-color: #3c5a78;
        padding: 12px;
        border-radius: 12px;
        z-index:1;
     
`

export default function ButtonPlus({onClick, abreOuFecha}:{onClick: MouseEventHandler<HTMLDivElement> | undefined, abreOuFecha: boolean}) {

   

    return (
        <>
            <ButtonPlusStyled onClick={onClick}  drag dragConstraints={{ bottom: 0, top: 0, left: 0, right: 250 }} whileTap={{ scale: 1.1, opacity: 0.9 }}>
                <motion.div  animate={{ rotate: abreOuFecha ? 45 : 0 }} >
                    <FaPlus color="white" size={40}/>
                </motion.div>
            </ButtonPlusStyled>
        </>
    )
}