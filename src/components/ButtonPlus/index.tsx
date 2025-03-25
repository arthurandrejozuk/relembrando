import styled from "styled-components"
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const ButtonPlusStyled = styled(motion.div)`

        position: absolute;
        left: 40px;
        bottom: 36px;
        background-color: #3c5a78;
        padding: 12px;
        border-radius: 12px;

`

export default function ButtonPlus() {
    return (
        <ButtonPlusStyled>
            <FaPlus color="white" size={32}/>
        </ButtonPlusStyled>
    )
}