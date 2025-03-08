import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children }) => (
      <article className="prose dark:prose-invert prose-p:text-neutral-900 dark:prose-p:text-neutral-100">
        {children}
      </article>
    ),
    h1: ({ children }) => (
      <h1 className="mb-0 text-lg font-semibold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-lg font-semibold">{children}</h2>,
  };
}
