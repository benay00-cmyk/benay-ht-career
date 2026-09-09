/**
 * App Router remounts this per navigation within the (marketing) group,
 * giving every route change a soft fade+slide entrance instead of a hard
 * swap — no client JS, no effect on browser back/forward or focus order.
 */
export default function MarketingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="animate-page-in">{children}</div>;
}
