import { AnimatePresence, motion } from "framer-motion"

import Memories from "../Memories"
import styled from "styled-components"

const CardStyled = styled(motion.div)`

    padding-bottom: 40px;
   

`


export default function Card({ ativos }:{ativos: boolean}) {

        return (
            <AnimatePresence>
                <CardStyled>
                    {ativos ?
                        <Memories titulo="Roda gigante" texto="Lembrando... Há muita coisa para lembrar. Testando colocar um textão aqui, uhuuuuuuuuuuuu! "/>
                    : null}
                </CardStyled>
            </AnimatePresence>
        )
    }
   
