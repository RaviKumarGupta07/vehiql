// to keep supabase always active. by using utimerobot  . It will ping this endpoint every 5 minutes
// to prevent the supabase from going idle.
export async function GET() {
  return new Response("OK", { status: 200 });
}
