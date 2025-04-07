import { AnimatePresence, motion } from "framer-motion"
import Imagem from "../../../public/images/roda-gigante.jpg";
import Memories from "../Memories"
import styled from "styled-components"
import { ILembrancas } from "../../../interface/lembranca";
import { useEffect, useState } from "react";

const CardStyled = styled(motion.div)`

    padding-bottom: 30px;
    div{
        display: flex;
        flex-direction: column;    
    }
    

`


export default function Card({ ativos }:{ativos: boolean}) {

    const [data, setData] = useState<ILembrancas[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/lembrancas`);
            const data = await res.json();
            setData(data);
        };
        fetchData();
    }, [])

    console.log(data);
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
                            {data.map((lembranca:ILembrancas) => (
                                <Memories
                                    key={lembranca.id}
                                    id={lembranca.id}
                                    imagem={lembranca.imagem}
                                    titulo={lembranca.titulo}
                                    texto={lembranca.descricao} custom={0}                                />
                             
                            ))}
                               <Memories
                                    imagem={Imagem}
                                    titulo="Roda gigante"
                                    texto="Lembrando... Há muita coisa para lembrar. Testando colocar um textão aqui, uhuuuuuuuu!"
                                    custom={1} 
                                />
                                <Memories
                                    titulo="Batman"
                                    texto="Lembrando... Há muita coisa para lembrar. Testando colocar um textão aqui, uhuuuuuuuu!"
                                    custom={2} 
                                />
                </motion.div>
            ) : null}
        </AnimatePresence>
    </CardStyled>
        )
    }
   
