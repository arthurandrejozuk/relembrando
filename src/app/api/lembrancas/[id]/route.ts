import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function GET(
  request: Request,
  context: { params: { id: string } } // <- Isso aqui está certo
) {
  const { id } = context.params

  const { data, error } = await supabase
    .from('lembrancas')
    .select('*')
    .eq('id', Number(id))

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID não fornecido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { error } = await supabase
    .from('lembrancas')
    .delete()
    .eq('id', Number(id))

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ message: 'Deletado com sucesso' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
