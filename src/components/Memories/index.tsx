import { AnimatePresence, motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import styled from "styled-components"
import Batman from "../../../public/images/default.webp"
import { useState } from "react"

const CardStyled = styled(motion.div)`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #eee4e4;    
    margin-left: 10%;
    margin-right: 10%;
    box-shadow: 8px 8px 10px #cdc2c2;
    border-radius: 12px;
    margin-bottom: 20px;
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
// const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: {
//         pathLength: 1,
//         opacity: 1,
//         transition: { duration: 2, ease: "easeInOut" }
//     }
// }

export default function Memories({ titulo, texto, imagem, custom }: { titulo: string, texto: string, imagem?: StaticImageData, custom: number }) {
    
    const [more, setMore] = useState(true)

    return (
        <CardStyled
            custom={custom}
            onClick={() => setMore(!more)}
            exit={{ opacity: 0, x: -200, transition: { duration: 0.5 } }}
            style={{  }}
            variants={{
                        hidden: {
                            scale: 1,
                            opacity: 0.5,
                            x: -100,
                            transition: {
                                delay: custom * 0.3 
                            }
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,  
                            x: 0,
                            transition: { delay: custom * 0.025 }
                        }
                    }}
                        initial="hidden" animate="visible">
                        <DivImageStyle>
                            <Image alt="" src={imagem ? imagem : Batman} width="170" height="170" />
                        </DivImageStyle>
                        <div onClick={() => setMore(!more)}>
                            <motion.h1  key={more ? "truncated" : "full"} initial={{textShadow: '0px'}}  animate={{textShadow: '1px 1px #ffffff'}} >
                                {titulo}
                            </motion.h1>
                              <AnimatePresence mode="wait">
                                <motion.p
                                      key={more ? "truncated" : "full"}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                >
                                    {more ? texto.slice(0, 30) + "..." : texto}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </CardStyled>
    )
}