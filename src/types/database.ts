export type LeadType =
  | "mentorluk"
  | "danismanlik"
  | "kurumsal"
  | "egitim"
  | "urun"
  | "iletisim";

export type LeadStatus = "yeni" | "iletisimde" | "tamamlandi" | "iptal";

export type AiSessionKind = "cv_analysis" | "hr_question";

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          type: LeadType;
          context: string;
          name: string;
          email: string;
          phone: string | null;
          message: string;
          extra: Record<string, unknown> | null;
          status: LeadStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          type: LeadType;
          context: string;
          name: string;
          email: string;
          phone?: string | null;
          message: string;
          extra?: Record<string, unknown> | null;
          status?: LeadStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          type?: LeadType;
          context?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          message?: string;
          extra?: Record<string, unknown> | null;
          status?: LeadStatus;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      ai_sessions: {
        Row: {
          id: string;
          kind: AiSessionKind;
          success: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          kind: AiSessionKind;
          success: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          kind?: AiSessionKind;
          success?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      lead_type: LeadType;
      lead_status: LeadStatus;
      ai_session_kind: AiSessionKind;
    };
  };
};
