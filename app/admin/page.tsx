import { Metadata } from "next";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { getIsAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: false });

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin page for leaf",
};

const AdminPage = () => {
  const isAdmin = getIsAdmin();
  if (!isAdmin) redirect("/");

  return (
    <div>
      <App />
    </div>
  );
};

export default AdminPage;
