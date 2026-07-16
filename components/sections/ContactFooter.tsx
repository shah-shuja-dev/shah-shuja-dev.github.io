import { profile } from "@/content/profile";

export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/10 px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Let&apos;s work together
        </h2>
        <p className="mt-2 text-foreground/70">
          Based in {profile.location}, open to remote opportunities.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a
            href={`mailto:${profile.email}`}
            className="text-sky-400 hover:text-sky-300"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-10 text-xs text-foreground/40">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
