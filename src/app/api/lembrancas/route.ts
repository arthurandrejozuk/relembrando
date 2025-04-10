import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function GET() {

   const{ data, error } = await supabase.from('lembrancas').select('*')

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

export async function POST(request: Request) {
  const body = await request.json()
  const { titulo, imagem, descricao } = body

  const { data, error } = await supabase
    .from('lembrancas')
    .insert({ imagem, titulo, descricao })
    .select('*')

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify(data), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}

// export async function DELETE(request: Request) {
//   const { searchParams } = new URL(request.url)
//   const id = searchParams.get('id')

//   if (!id) {
//     return new Response(JSON.stringify({ error: 'ID não fornecido' }), {
//       status: 400,
//       headers: { 'Content-Type': 'application/json' },
//     })
//   }

//   const { error } = await supabase.from('lembrancas').delete().eq('id', Number(id))

//   if (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 402,
//       headers: { 'Content-Type': 'application/json' },
//     })
//   }

//   return new Response(JSON.stringify({ message: 'Deletado com sucesso' }), {
//     status: 202,
//     headers: { 'Content-Type': 'application/json' },
//   })
// }