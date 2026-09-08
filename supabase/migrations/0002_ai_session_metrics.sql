-- AI Kariyer Asistanı kullanım özetini zenginleştir (CV/ilan içeriği hâlâ saklanmaz)

alter table public.ai_sessions
  add column has_cv boolean,
  add column ats_score smallint,
  add column hiring_likelihood smallint,
  add column application_readiness text;
