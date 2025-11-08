export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-zinc-700 dark:text-zinc-400">
        <p>Copyright © {year} Adedamola Ijiwole</p>
        <p className="mt-1">Built with ❤️ using React, TypeScript & Tailwind</p>
      </div>
    </footer>
  );
}