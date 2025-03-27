import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import styled from "styled-components"
import Imagem from "../../../public/images/roda-gigante.jpg";
import { useState } from "react";

const CardStyled = styled(motion.div)`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #eee4e4;    
    margin-left: 10%;
    margin-right: 10%;
    box-shadow: 8px 8px 10px #cdc2c2;
    border-radius: 12px;
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 12px;
        padding-top: 4px;
        gap: 16px;
        color: #8c7b7b;
        h1{
            font-family: "Londrina Solid";
            font-size: 40px;
            color: #aa9595;
            font-weight: 500;
            padding-left: 12px;
            text-decoration: underline;
            text-underline-offset:4px;
        }
        p{
            font-size: 24px;
            padding-left: 12px;
        }
    }

`

const DivImageStyle = styled(motion.div)`
    
    width: 100%;
    img{
        width: 100%;
        height: auto;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }

`


export default function Memories({ titulo, texto }: { titulo: string, texto: string }) {
    
    const [more, setMore] = useState(true)

    return (
        <CardStyled
            onClick={() => setMore(!more)}
            exit={{ opacity: 0,  x: -200, transition: { duration: 0.5 } }}
            variants={{
                        hidden: {
                            scale: 1,
                            opacity: 0.5,
                            x: -100
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,  
                            x: 0
                        }
                    }}
                        initial="hidden" animate="visible">
                        <DivImageStyle>
                            <Image alt="" src={Imagem} width="170" height="170" />
                        </DivImageStyle>
                        <div>
                            <motion.h1 key={more ? "truncated" : "full"} initial={{textShadow: '0px'}}  animate={{textShadow: '1px 1px #ffffff'}} >
                                {titulo}
                            </motion.h1>
                              <AnimatePresence mode="wait">
                                <motion.p
                                    key={more ? "truncated" : "full"}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 1, transition: { duration: 0.1 } }}
                                >
                                    {more ? `${texto.slice(0, 30)}...` : texto}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </CardStyled>
    )
}