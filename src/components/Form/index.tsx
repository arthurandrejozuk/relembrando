import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Batman from "../../../public/images/default.webp";
import Image from "next/image";
import { uploadImagem } from "../../../infra/function/uploadImage";
import Notification from "../Notification";

const DivStyled = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-behavior: auto;
`;

const FormStyled = styled(motion.div)`
    h1 {
        font-size: 44px;
        padding-bottom: 20px;
        font-family: "Londrina Solid", sans-serif;
        color: #3c5a78;
        text-align: center;
    }
    flex-direction: column;
    scroll-behavior: auto;
    background-color: #f4f6f7;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 16px;
    position: absolute;
    border-radius: 4px;
  
    label {
        font-size: 24px;
        color: #3c5a78;
        position: absolute;
        padding-left: 4px;
    }
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "Lexend", sans-serif;
        width: 95%;
        gap: 18px;
        
        input, textarea {
            font-family: "Lexend", sans-serif;
            border: none;
            border-radius: 4px;
            padding: 4px;
            font-size: 24px;
            width: 95%;
        }
        div{

            width: 100%;

        }
        .input_image{
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            input{
                padding-left: 36px;
            }
            label{
                padding-bottom: 12px;
            }
        }
        input {
            height: 32px;
            padding-top: 30px;
        }

        input::placeholder, textarea::placeholder {
            color: #46638057;
        }

        textarea {
            height: 100px;
            margin-bottom: 8px;
            padding-top: 30px;
        }
    }
    
    button {
        background-color: #3c5a78;
        color: #f4f6f7;
        width: 100%;
        border: none;
        padding: 12px;
        font-size: 28px;
        border-radius: 8px;
        cursor: pointer;
    }
`;



export default function Form({ onSuccess }: { onSuccess: () => void }) {
    // useState que pega a imagem do tipo File
    const [img, setImg] = useState<File | null>(null);
    const [imgPreview, setImgPreview] = useState<string | null>(Batman.src);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState<number>()

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //Verifica se há um file e então pega o
      const file = event.target.files?.[0];
        // caso exista, insere em img o file e transforma em string URL
        if (file) {
            setImg(file);
            setImgPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


    try {
    // 1. Faz upload da imagem
        const imagemUrl = await uploadImagem(img);
    // 2. Envia para a API com a URL da imagem
        const dados = { titulo, descricao, imagem: imagemUrl }; 
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?  process.env.NEXT_PUBLIC_BASE_URL : 'http://localhost:3000' }/api/lembrancas `, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        });
        
        setStatus(response.status);
    
        if (response.ok) {
            onSuccess(); // 👈 dispara o reload no componente pai
            setTitulo('');
            setDescricao('');
            setImg(null);
            setImgPreview(null);
        }       
        

        } catch (error) {
            console.error("Erro ao enviar:", error);
    }

    };

    return (
        <DivStyled  initial="hidden" animate="visible" exit={{ y: -100, opacity: 0 }} variants={{ hidden: { y: -1000 }, visible: { y: 0 } }}>
            <FormStyled>
                <h1>Crie uma lembrança</h1>
                <motion.form onSubmit={handleSubmit}>
                    <div className="input_image">
                        <motion.label htmlFor="file">Escolha uma imagem:</motion.label>
                        <input type="file" accept="image/png, image/jpeg, image/webp" onChange={handleFileChange} />
                         <p>Imagem padrão</p>
                        <Image src={imgPreview || Batman} width={120} height={120} alt="Preview da imagem" />
                    </div>
                    <div>
                        <motion.label>Dê um título:</motion.label>
                        <input value={titulo} onChange={(event) => setTitulo(event.target.value)} placeholder="Digite um título" type="text" />
                    </div>
                    <div>
                        <motion.label>Descreva a lembrança:</motion.label>
                        <textarea value={descricao} onChange={(event) => setDescricao(event.target.value)} placeholder="Escreva uma descrição" />
                    </div>

                    <button type="submit">Criar lembrança</button>
                    {status ? <Notification status={status}/> : ''}
                </motion.form>
            </FormStyled>
        </DivStyled>
    );
}