import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Client do Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// GET: Buscar lembrança por ID
export async function GET(
  request: NextRequest,
  context: { params: Record<string, string> }
) {
  const id = context.params.id

  const { data, error } = await supabase
    .from('lembrancas')
    .select('*')
    .eq('id', Number(id))

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 200 })
}

// DELETE: Deletar lembrança por ID
export async function DELETE(
  request: NextRequest,
  context: { params: Record<string, string> }
) {
  const id = context.params.id

  const { error } = await supabase
    .from('lembrancas')
    .delete()
    .eq('id', Number(id))

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'Deletado com sucesso' }, { status: 200 })
}