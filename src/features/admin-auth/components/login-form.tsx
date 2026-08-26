"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { loginAction } from "@/features/admin-auth/actions";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await loginAction({ email, password });

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <Card>
      <h1 className="font-display text-xl font-medium text-navy-deep">
        Admin Girişi
      </h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4" noValidate>
        <div>
          <label className="text-[13.5px] font-medium text-ink">E-posta</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-(--radius-sm) border border-hairline bg-bg px-3.5 py-2.5 text-[14px] outline-none focus-visible:border-gold-deep"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="text-[13.5px] font-medium text-ink">Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-(--radius-sm) border border-hairline bg-bg px-3.5 py-2.5 text-[14px] outline-none focus-visible:border-gold-deep"
            autoComplete="current-password"
          />
        </div>

        {error && (
          <p role="alert" className="text-[13.5px] text-rose-600">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary" disabled={loading} className="mt-1">
          {loading && <Loader2 className="size-4 animate-spin" />}
          Giriş Yap
        </Button>
      </form>
    </Card>
  );
}
