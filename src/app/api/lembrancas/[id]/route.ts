import { createClient } from '@supabase/supabase-js'
import { NextRequest } from 'next/server'

// se quiser declarar tipagem manual:
type Context = {
  params: {
    id: string
  }
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function GET(request: NextRequest, context: Context) {
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

export async function DELETE(request: NextRequest, context: Context) {
  const { id } = context.params

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