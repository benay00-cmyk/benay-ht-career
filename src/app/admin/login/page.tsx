import type { Metadata } from "next";

import { AdminLoginForm } from "@/features/admin-auth/components/login-form";

export const metadata: Metadata = { title: "Admin Girişi · Benay HR" };

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-bg p-4">
      <div className="w-full max-w-sm">
        <AdminLoginForm />
      </div>
    </div>
  );
}
