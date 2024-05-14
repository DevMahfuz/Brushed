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
  const supabase = createAdminClient();
  const id = searchParams.get("id");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from("booking")
      .update({ address_type: "Australia" })
      .eq("id", 14);

    console.log("data", data);
    if (error) return Response.json({ error });

    return Response.json({ data: data });
  } else {
    return Response.json({ error: "no permition" });
  }
}
