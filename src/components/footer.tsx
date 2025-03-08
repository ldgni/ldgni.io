import Clock from "@/components/ui/clock";

export default function Footer() {
  return (
    <footer className="mt-8 flex justify-between text-neutral-600 dark:text-neutral-400">
      <small>&copy; 2025 Luca Di Gianni</small>
      <small>
        <Clock />
      </small>
    </footer>
  );
}
