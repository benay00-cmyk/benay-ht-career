"use client";

/**
 * An invisible full-card "stretched link" overlay: clicking anywhere on the
 * service Card (which must have `position: relative`) jumps to the request
 * form further down the page and pre-selects this service in its dropdown
 * (LeadRequestForm listens for `hashchange` and matches against `id`).
 * Kept separate from the card's own `id` attribute, which external links
 * (e.g. the Kariyer Check-Up result screen) still use to deep-link directly
 * to this card.
 */
export function ServiceJumpLink({ id, label }: { id: string; label: string }) {
  return (
    <a
      href={`#${id}`}
      aria-label={`${label} için talep oluştur`}
      className="absolute inset-0 z-10"
      onClick={(event) => {
        event.preventDefault();
        history.replaceState(null, "", `#${id}`);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
        document
          .getElementById("talep-olustur")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    />
  );
}
