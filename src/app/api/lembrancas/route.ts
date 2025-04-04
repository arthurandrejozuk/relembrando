
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

// export async function POST(request: Request) {
//   // Parse the request body
//   const body = await request.json();
//   const { titulo } = body;
 
//   // e.g. Insert new user into your DB
//   const novaLembranca = { id: Date.now(), titulo };
 
//   return new Response(JSON.stringify(novaLembranca), {
//     status: 201,
//     headers: { 'Content-Type': 'application/json' }
//   });
// }