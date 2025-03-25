import { motion } from "framer-motion"
import Image from "next/image"
import styled from "styled-components"
import Imagem from "../../../public/images/roda-gigante.jpg";

const CardStyled = styled(motion.div)`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #eee4e4;    
    margin-left: 10%;
    margin-right: 10%;
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
        }
        p{
            font-size: 28px;
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

export default function Card({ ativos }:{ativos: boolean}) {
    
    if (ativos) {
        return (
            <CardStyled variants={{
                hidden: {
                    scale: 0.8,
                    opacity:0.5,
                },
                visible: {
                    opacity: 1,
                    rotate: [0, 2, -2, 0],
                    scale: [1, 1.1, 1],
                }
            }}
                initial="hidden" animate="visible">
                <DivImageStyle>
                    <Image alt="" src={Imagem} width="170" height="170" />
                </DivImageStyle>
                <div>
                    <h1>
                        Roda gigante
                    </h1>
                    <p>
                        Relembrando... Há muitas coisas para lembrar
                    </p>
                </div>
            </CardStyled>
        )
    }
    return <></>
}