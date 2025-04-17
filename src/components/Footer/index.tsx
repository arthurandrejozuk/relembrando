import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"

const FooterStyled = styled(motion.div)`
    

    z-index: -2;
    background-color: transparent;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: #aa9595;
    font-size: 20px;
    margin-bottom: 40px;
`

export default function Footer({active} : {active: boolean}) {
    return (
        <AnimatePresence>
            { active &&  <FooterStyled
                key="footer"
                initial={{ opacity: 0, y: 100 }} // Começa fora da tela
                animate={{ opacity: 1, y: 0 }} // Entra suavemente
                exit={{ opacity: 1, y: 100 }} // Sai suavemente
                transition={{ duration: 0.5 }}
            >
            <h1>Feito por Arthur ;)</h1>
            </FooterStyled>}
       
        </AnimatePresence>
    )
}