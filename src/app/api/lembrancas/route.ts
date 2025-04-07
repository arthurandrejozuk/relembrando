
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  
export async function GET() {
  const { data, error } = await supabase.from('lembrancas').select('*');
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },

  });
}


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


export async function POST(request: Request) {
  const body = await request.json();
  const { titulo, imagem, descricao } = body;



  const { data, error } = await supabase
    .from('lembrancas')
    .insert({ imagem, titulo, descricao })
    .select('*');

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}