import { C } from "../../theme/theme";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: `1px solid ${C.border}` }}>
      <span className="pf-mono text-xs" style={{ color: C.faint }}>
        © {new Date().getFullYear()} {profile.fullName}
      </span>
      <span className="pf-mono text-xs" style={{ color: C.faint }}>
        React · C# / .NET · SQL Server
      </span>
    </footer>
  );
}
