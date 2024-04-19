import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <section className="profile-page">
      <div className="container">
        <div className="left">
          <h2>Account Details</h2>
          <div>Email: {user.email}</div>
          <button>Change Password</button>
        </div>
        <div className="right">
          <h2>My Appointments</h2>
        </div>
      </div>
    </section>
  );
}
