import { LucideIcon } from "lucide-react";

type Social = {
  href: string;
  ariaLabel: string;
  Icon: LucideIcon;
  isExternal?: boolean;
};

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
      className="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus:bg-neutral-200 focus:text-neutral-900 focus:outline-none active:bg-neutral-200 active:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus:bg-neutral-800 dark:focus:text-neutral-100 dark:active:bg-neutral-800 dark:active:text-neutral-100">
      <Icon />
    </a>
  );
}
