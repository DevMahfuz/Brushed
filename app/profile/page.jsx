import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import MyAppointments from "../../components/MyAppointments/MyAppointments";
import DeleteBooking from "../../components/booking/DeleteBooking";

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
          <Link href="/update-password">Change Password</Link>
          <div className="user-membership"></div>
          <DeleteBooking id="14" />
        </div>
        <div className="right">
          <h2>My Appointments</h2>
          <MyAppointments />
        </div>
      </div>
    </section>
  );
}
