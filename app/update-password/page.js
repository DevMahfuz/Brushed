import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { SubmitButton } from "../login/submit-button";
import Link from "next/link";

export default async function UpdatePassword({ searchParams }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const updatepass = async (formData) => {
    "use server";
    const supabase = createClient();
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password === confirmPassword) {
      const { data, error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        return redirect("/update-password?message=Could not update Pass");
      }
      return redirect("/update-password?message=successfully updateed pass");
    }

    return redirect("/update-password?message=password did not match");
  };

  return (
    <>
      <Header />
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <h1 className="text-4xl text-center">Update Password</h1>
          <label className="text-md" htmlFor="password">
            New password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="****"
            required
          />
          <label className="text-md" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="confirmPassword"
            placeholder="****"
            required
          />

          <SubmitButton
            formAction={updatepass}
            className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Updating..."
          >
            Update Password
          </SubmitButton>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </>
  );
}
