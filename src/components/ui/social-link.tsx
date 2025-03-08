import { Social } from "@/lib/types";

export default function SocialLink({
  href,
  ariaLabel,
  Icon,
  isExternal = false,
}: Social) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      aria-label={ariaLabel}
      className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100">
      <Icon />
    </a>
  );
}
