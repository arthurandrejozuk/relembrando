import { AnimatePresence, motion } from "framer-motion"

import Memories from "../Memories"
import styled from "styled-components"

const CardStyled = styled(motion.div)`

    padding-bottom: 40px;
   div{
    display: flex;
    flex-direction: column;
    gap: 20px;
   }

`


export default function Card({ ativos }:{ativos: boolean}) {

        return (
            <CardStyled>
                <AnimatePresence>
                    {ativos ?
                        <div>
                            <Memories titulo="Roda gigante" texto="Lembrando... 
                                Há muita coisa para lembrar. Testando colocar um textão aqui, uhuuuuuuuu!
                            "/>
                            {/* <Memories titulo="Roda gigante" texto="Lembrando... 
                                Há muita coisa para lembrar. Testando colocar um textão aqui, uhuuuuuuuu!
                            "/> */}
                        </div>
                    : null}
                </AnimatePresence>
            </CardStyled>
        )
    }
   
