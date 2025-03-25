import styled from "styled-components"
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const ButtonPlusStyled = styled(motion.div)`

        position: absolute;
        left: 10%;
        bottom: 36px;
        background-color: #3c5a78;
        padding: 12px;
        border-radius: 12px;

`

export default function ButtonPlus() {

    return (
        <ButtonPlusStyled drag dragConstraints={{ bottom: 0, top: 20, left: 0, right: 250 }} whileTap={{scale: 1.1, opacity: 0.9}}>
            <FaPlus color="white" size={32}/>
        </ButtonPlusStyled>
    )
}