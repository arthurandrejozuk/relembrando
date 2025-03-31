import { AnimatePresence, motion } from "framer-motion"
import Imagem from "../../../public/images/roda-gigante.jpg";
import Memories from "../Memories"
import styled from "styled-components"

const CardStyled = styled(motion.div)`

    padding-bottom: 30px;
    div{
        display: flex;
        flex-direction: column;    
    }
    

`


export default function Card({ ativos }:{ativos: boolean}) {

        return (
          <CardStyled>
        <AnimatePresence mode="wait">
            {ativos ? (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } }, // Delay entre animações
                        exit: { transition: { staggerChildren: 0.3, staggerDirection: -1 } }, // Delay reverso ao sair
                    }}
                >
                    <Memories
                        imagem={Imagem}
                        titulo="Roda gigante"
                        texto="Lembrando... Há muita coisa para lembrar. Testando colocar um textão aqui, uhuuuuuuuu!"
                        custom={0} 
                    />
                    <Memories
                        titulo="Batman"
                        texto="Lembrando... Há muita coisa para lembrar. Testando colocar um textão aqui, uhuuuuuuuu!"
                        custom={1} 
                    />
                </motion.div>
            ) : null}
        </AnimatePresence>
    </CardStyled>
        )
    }
   
