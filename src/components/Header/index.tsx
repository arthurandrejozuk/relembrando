'use client'
import { BsArrowDownSquareFill } from "react-icons/bs";
import { useState } from "react";
import styled from "styled-components";
import {  motion } from 'framer-motion';

const HeaderStyled = styled.header<{ $isTouched: boolean }>`
    background-color: #F1E7E7;
    padding: 32px;
    font-size: 40px;
    color: #3c5a78;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-family: ${({ $isTouched }) => 
            $isTouched ? '"Londrina Solid", sans-serif' : '"Londrina Sketch", sans-serif'};
        transition: font-family 500ms ease-in-out;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`;

export default function Header() {
    const [isTouched, setIsTouched] = useState(false);

    return (
        <HeaderStyled
            $isTouched={isTouched}
            onTouchStart={() => setIsTouched(true)}
          
        >
            <motion.div whileTap={{scale:1.1}}>
                <motion.p >Relembrando</motion.p>
                <motion.div initial='normal' animate='animate'
                variants={{
                    normal: {
                        scale: 0.9,
                        opacity: 0,
                      
                         transition: {
                            delay: .4
                        }
                    },
                    animate: {
                        opacity: 1,
                        scale: [1, 1.4, 1.2, 1],
                        rotate:[0, 20, -10, 0],
                        transition: {
                            delay: .4
                        }
                    }
                }}>
                    <BsArrowDownSquareFill size={32}/>
                </motion.div>
            </motion.div>
        </HeaderStyled>
    );
}