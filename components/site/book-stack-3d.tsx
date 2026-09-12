"use client";

import { cn } from "@/lib/utils";

type BookStackVariant = "skills" | "projects";

const booksConfig: Record<BookStackVariant, { label: string; color: string }[]> = {
  skills: [
    { label: "React", color: "from-[#61dafb]/90 to-[#2a8cc4]" },
    { label: "Node.js", color: "from-[#68a063] to-[#3c6e30]" },
    { label: "Express", color: "from-[#f6d365] to-[#fda085]" },
  ],
  projects: [
    { label: "Build", color: "from-[#7049e9] to-[#5530c7]" },
    { label: "Learn", color: "from-[#dc4d9b] to-[#b83280]" },
    { label: "Grow", color: "from-[#06b6d4] to-[#0891b2]" },
  ],
};

export function BookStack3D({
  variant = "projects",
  className,
}: {
  variant?: BookStackVariant;
  className?: string;
}) {
  const books = booksConfig[variant];

  return (
    <div
      className={cn("book-stack-container relative", className)}
      aria-hidden="true"
    >
      <div className="book-stack">
        {books.map((book, i) => (
          <div
            key={book.label}
            className="book-item"
            style={{
              "--book-index": i,
              "--book-delay": `${i * 120}ms`,
            } as React.CSSProperties}
          >
            {/* Book top face */}
            <div className={`book-top bg-gradient-to-r ${book.color}`} />
            {/* Book front face (spine) */}
            <div className={`book-front bg-gradient-to-b ${book.color}`}>
              <span className="book-label">{book.label}</span>
            </div>
            {/* Book right face */}
            <div className={`book-right bg-gradient-to-b ${book.color}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
