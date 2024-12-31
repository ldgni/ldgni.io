import { Link } from "react-router";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function NotFound() {
  return (
    <Container>
      <Header />
      <h2>This page doesn't exist.</h2>
      <span>&rarr; &nbsp;</span>
      <Link
        to="/"
        className="duraiton-300 underline underline-offset-2 transition-opacity hover:opacity-75">
        Go back home
      </Link>
      <Footer />
    </Container>
  );
}
