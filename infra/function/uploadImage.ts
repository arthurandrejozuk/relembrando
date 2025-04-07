import { createClient } from "@supabase/supabase-js";

 
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  

export const uploadImagem = async (file: File | null) => {
    const fileName = `${Date.now()}_${file?.name}`;
    
    const { error } = await supabase.storage
        .from('lembrancas') // Nome do seu bucket no Supabase Storage
        .upload(fileName, file!);

    if (error) {
        throw new Error("Erro ao enviar imagem: " + error.message);
    }

    const { data: publicUrlData } = supabase
        .storage
        .from('lembrancas')
        .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
    };