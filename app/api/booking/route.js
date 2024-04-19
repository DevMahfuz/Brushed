import { createClient } from "@/utils/supabase/server";

export async function POST(request) {
  const res = await request.json();
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase.from("booking").insert(res).select();

  if (error) {
    console.log(error);
    return Response.json({ error });
  }

  return Response.json({ data });
}
