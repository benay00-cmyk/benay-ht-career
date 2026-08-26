const WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const requestLog = new Map<string, number[]>();

/**
 * Basit, bellek içi (in-memory) IP bazlı hız sınırlama.
 * Tek sunucu instance'ı için yeterlidir; çoklu instance / production
 * ölçeğinde Redis gibi paylaşımlı bir store ile değiştirilmelidir.
 */
export function checkRateLimit(identifier: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const timestamps = (requestLog.get(identifier) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(identifier, timestamps);
    return { allowed: false, remaining: 0 };
  }

  timestamps.push(now);
  requestLog.set(identifier, timestamps);
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - timestamps.length };
}
