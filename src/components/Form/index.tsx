import { motion } from "framer-motion"
import styled from "styled-components"

const DivStyled = styled(motion.div)`

        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        scroll-behavior: auto;

`

const FormStyled = styled(motion.div)`
    
    h1{
        font-size: 36px;
        padding-bottom: 20px;
        font-family: "Londrina Solid", sans-serif;
        color: #3c5a78;
    }
    flex-direction: column;
    scroll-behavior: auto;
    background-color: #f4f6f7;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 16px;
    padding-bottom: 16px;
    position: absolute;
    border-radius: 12px;
    text-align: center;
    width: 95%;
    padding-right: 4px;
    padding-left: 4px;
    border: 2px solid #3c5a78;
    label{
        font-size: 24px;
        color: #3c5a78;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "Lexend", sans-serif;
        width: 90%;
        gap: 18px;
       
        input{
             font-family: "Lexend", sans-serif;
            border: none;
            border-radius: 4px;
            padding: 4px;
            height: 20px;
            font-weight: 20px;
            width: 90%;
            font-size: 20px;
        }
        textarea{
          font-family: "Lexend", sans-serif;
            height: 80px;
            border: none;
            font-size: 22px;
            width: 90%;
        }
        
    }

`

export default function Form() {
    return (
        <DivStyled initial='hidden' animate='visible' exit={{ y: -100, opacity:0 }} variants={{ hidden: { y: -1000 }, visible: { y: 0 } }}>
            <FormStyled>
            <h1>Crie uma lembrança</h1>
                <motion.form>
                    <motion.label htmlFor='file'>Escolha uma imagem:</motion.label>
                    <input type="file" accept="image/png, image/jpeg" />
                    <motion.label>Dê um titulo para a lembrança:</motion.label>
                    <input type="text" />
                    <motion.label>Descreva a lembrança:</motion.label>
                    <textarea  />
                </motion.form>
            </FormStyled>
        </DivStyled>
    )
}