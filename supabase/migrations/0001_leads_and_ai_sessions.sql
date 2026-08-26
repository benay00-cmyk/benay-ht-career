-- Talepler (leads) ve AI kullanım kayıtları

create type public.lead_type as enum (
  'mentorluk',
  'danismanlik',
  'kurumsal',
  'egitim',
  'urun',
  'iletisim'
);

create type public.lead_status as enum (
  'yeni',
  'iletisimde',
  'tamamlandi',
  'iptal'
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  type public.lead_type not null,
  context text not null,
  name text not null,
  email text not null,
  phone text,
  message text not null,
  extra jsonb,
  status public.lead_status not null default 'yeni',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index leads_type_idx on public.leads (type);
create index leads_status_idx on public.leads (status);
create index leads_created_at_idx on public.leads (created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger leads_set_updated_at
before update on public.leads
for each row execute function public.set_updated_at();

alter table public.leads enable row level security;

-- Herkes (form gönderen ziyaretçiler) yeni talep oluşturabilir.
create policy "Herkes talep oluşturabilir"
on public.leads for insert
to anon, authenticated
with check (true);

-- Yalnızca giriş yapmış admin talepleri görebilir/güncelleyebilir.
create policy "Giriş yapan kullanıcı talepleri görebilir"
on public.leads for select
to authenticated
using (true);

create policy "Giriş yapan kullanıcı talep durumunu güncelleyebilir"
on public.leads for update
to authenticated
using (true)
with check (true);

-- AI kullanım sayaçları (maliyet/kullanım takibi, içerik saklamaz)
create type public.ai_session_kind as enum ('cv_analysis', 'hr_question');

create table public.ai_sessions (
  id uuid primary key default gen_random_uuid(),
  kind public.ai_session_kind not null,
  success boolean not null,
  created_at timestamptz not null default now()
);

create index ai_sessions_kind_idx on public.ai_sessions (kind);
create index ai_sessions_created_at_idx on public.ai_sessions (created_at desc);

alter table public.ai_sessions enable row level security;

create policy "Herkes AI kullanım kaydı oluşturabilir"
on public.ai_sessions for insert
to anon, authenticated
with check (true);

create policy "Giriş yapan kullanıcı AI kullanım kayıtlarını görebilir"
on public.ai_sessions for select
to authenticated
using (true);
