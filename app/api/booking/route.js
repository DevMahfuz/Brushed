import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/adminServer";

export async function POST(request) {
  const res = await request.json();
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase.from("booking").insert(res).select();

  if (error) {
    return Response.json({ data: null, error: error.message });
  }

  return Response.json({ data: data, error: null });
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const supabase = createClient();
  const id = searchParams.get("id");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    console.log(user);
    const { error, data } = await supabase
      .from("booking")
      .delete()
      .eq("id", id);

    console.log("data", data);
    if (error) return Response.json({ error });

    return Response.json({ data: data });
  } else {
    return Response.json({ error: "no permition" });
  }
}
