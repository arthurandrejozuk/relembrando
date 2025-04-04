'use client'
import { BsArrowDownSquareFill } from "react-icons/bs";
import { useState } from "react";
import styled from "styled-components";
import {  motion } from 'framer-motion';

const HeaderStyled = styled(motion.header)<{ $isTouched: boolean }>`

    padding: 32px;
    padding-top: 40px;
    font-size: 56px;
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


const Icon = styled(motion.div) <{ $onClick: boolean }>`
    
        .icon{
            width: ${({ $onClick }) =>
                $onClick ? '36px' : '42px'
            };
        transition: width 500ms ease-in-out; 
    }
   

`;

export default function Header({onClick} : {onClick: () => void}) {
    const [isTouched, setIsTouched] = useState(false);
    const [click, setClick] = useState(false);
    return (
        <HeaderStyled
            
            $isTouched={isTouched}
            onClick={() => {
                setIsTouched(!isTouched)
                setClick(!click)
            }} 
        >
            <motion.div onClick={onClick} initial='hidden' animate='visible'
                variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .1
                        }
                    },
                }}
                whileTap={{ scale: 1.1}}>
                <motion.p >Lembrando</motion.p>
                <Icon $onClick={click} initial='normal' animate='animate'
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
                    <BsArrowDownSquareFill className="icon"/>
                </Icon>
            </motion.div>
        </HeaderStyled>
    );
}