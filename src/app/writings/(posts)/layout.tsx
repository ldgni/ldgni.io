export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose prose-headings:font-semibold prose-headings:text-dark prose-h1:mb-4 prose-h1:text-2xl prose-h1:font-bold prose-h2:mt-[1em] prose-h2:text-xl prose-h3:mt-[0.6em] prose-h3:text-lg prose-p:my-[1em] prose-p:text-dark prose-a:text-accent prose-strong:text-dark prose-code:text-accent prose-pre:my-[1em] prose-li:text-dark prose-img:my-[1em] prose-img:rounded-sm prose-img:border prose-img:border-zinc-400 prose-hr:mb-8 prose-hr:mt-0 prose-hr:border-[1px] prose-hr:border-accent sm:prose-h1:text-3xl sm:prose-h2:text-2xl sm:prose-h3:text-xl prose-headings:dark:text-light prose-p:dark:text-light prose-strong:dark:text-light prose-li:dark:text-light">
      {children}
    </div>
  );
}
