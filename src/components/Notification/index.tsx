
import { motion } from "framer-motion"
import styled from "styled-components"
import { BiHappyAlt } from "react-icons/bi";
import { RiEmotionUnhappyLine } from "react-icons/ri";

const NotificationStatus = styled(motion.div)`

    top: 0px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    margin: 20px;
    
    p{
        font-size: 32px;
        padding: 12px;
    }
    div{
        display: flex;
        align-items: center;
        padding-top:20px;
        padding-left: 20px;
    }

`

interface INotification {
    status: number
}

export default function Notification({status}:INotification) {

    if (status <= 240 || status == 200) {
        return (
            <NotificationStatus style={{color:'green', backgroundColor:'white'}} >
                 <div style={{backgroundColor:'greenyellow'}}>
                    <BiHappyAlt size={60} />
                    <h1 style={{ color: 'green' }}>
                        Sucesso! Tudo ocorreu bem
                    </h1>
                 </div>
                <p>Continue navegando!</p>
            </NotificationStatus>
        )
    }
    return (
        <NotificationStatus style={{color:'red', backgroundColor:'white'}}>
            <div style={{backgroundColor:'red'}}>
                <h1 style={{ color: 'red' }}>
                    <RiEmotionUnhappyLine />
                    Erro! Algo deu errado
                </h1>
            </div>
            <p>Tente novamente!</p>
        </NotificationStatus>
    ) 
}