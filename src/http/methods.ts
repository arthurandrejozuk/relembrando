// import { uploadImagem } from "../../infra/function/uploadImage";

//  export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, img: File | null, descricao: string, titulo: string) => {
//         event.preventDefault();

//     try {
//     // 1. Faz upload da imagem
//         const imagemUrl = await uploadImagem(img);

//     // 2. Envia para a API com a URL da imagem
//         const dados = { titulo, descricao, imagem: imagemUrl };
//     //${process.env.NEXT_PUBLIC_BASE_URL ?  process.env.NEXT_PUBLIC_BASE_URL : 'http://localhost:3000/' }
//         await fetch(`http:/localhost:3000/api/lembrancas`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(dados),
//         });

//             console.log("Enviado com sucesso");

//         } catch (error) {
//             console.error("Erro ao enviar:", error);
//         }
//  };
    