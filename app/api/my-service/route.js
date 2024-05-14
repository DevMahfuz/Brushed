import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("booking")
    .select()
    .eq("user_id", user.id);

  if (error) {
    return Response.json({ data: null, error: error.message });
  }

  return Response.json({ data: data, error: null });
}
