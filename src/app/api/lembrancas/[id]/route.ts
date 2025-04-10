import { createClient } from '@supabase/supabase-js';
import { NextRequest } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/lembrancas/[id]
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID não fornecido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { data, error } = await supabase
    .from('lembrancas')
    .select('*')
    .eq('id', id)
    .single();

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

// DELETE /api/lembrancas/[id]
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID não fornecido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { error } = await supabase
    .from('lembrancas')
    .delete()
    .eq('id', id);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: 'Deletado com sucesso' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}