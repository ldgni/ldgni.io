import Time from "@/components/time";

export default function Footer() {
  return (
    <footer className="text-muted-foreground mt-8 flex justify-between">
      <small>&copy; 2025 Luca Di Gianni</small>
      <small>
        <Time />
      </small>
    </footer>
  );
}
