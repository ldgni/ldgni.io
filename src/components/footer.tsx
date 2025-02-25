import Clock from "@/components/ui/clock";

export default function Footer() {
  return (
    <footer className="mt-8 flex justify-between">
      <small>&copy; 2025 Luca Di Gianni</small>
      <Clock />
    </footer>
  );
}
