import { createFileRoute } from "@tanstack/react-router";
import { Quiz } from "@/components/Quiz";
import logoAsset from "@/assets/college-logo.asset.json";
import headerAsset from "@/assets/image/images_edited.avif";
import gajeraLogo from "@/assets/image/gajera.avif";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BCA Quiz – Kamani Science College" },
      {
        name: "description",
        content:
          "Interactive 10-question quiz for BCA Semester 1 students covering Computer Fundamentals, Internet, HTML, SEO and more.",
      },
      { property: "og:title", content: "BCA Quiz – Kamani Science College" },
      {
        property: "og:description",
        content:
          "Test your knowledge on Computer Fundamentals, Internet, HTML, SEO, Programming Basics and Operating Systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="quiz-bg min-h-screen flex flex-col">
      <header className="quiz-header relative overflow-hidden">
        <img
          src={gajeraLogo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto flex max-w-5xl items-center gap-4 px-4 py-5">
          <img
            src={headerAsset}
            alt="Kamani Science College logo"
            className="h-14 w-14 rounded-full object-cover ring-2 ring-white/70 shadow"
          />
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-lg font-bold text-white sm:text-2xl">
              Kamani Science College And Prataprai Arts College
            </h1>
            <p className="text-xs text-white/80 sm:text-sm">BCA Semester 1 — Online Quiz</p>
          </div>
          <img
            src={gajeraLogo}
            alt="Gajera"
            className="hidden h-14 w-14 rounded-full object-cover ring-2 ring-white/70 shadow sm:block"
          />
        </div>
      </header>

      <main className="flex-1 px-4 py-10">
        <div className="mx-auto max-w-2xl">
          <Quiz logoUrl={headerAsset} />
        </div>
      </main>

      <footer className="border-t bg-white/70 py-4 text-center text-sm text-muted-foreground backdrop-blur">
        Developed for BCA Semester 1 Students
      </footer>
    </div>
  );
}
