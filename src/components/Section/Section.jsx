export function Section({ className="", children }) {
  return <section className={`flex gap-4 container justify-center self-center ${className}`}>{children}</section>;
}
