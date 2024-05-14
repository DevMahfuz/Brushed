// utils/withAuth.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "@/utils/supabase/server";

export default function withAuth(WrappedComponent) {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const supabase = createClient();
        const { user } = await supabase.auth.api.getUserByCookie();

        if (!user) {
          router.push("/login");
        }
      };

      checkAuth();
    }, []);

    return <WrappedComponent {...props} />;
  };
}
