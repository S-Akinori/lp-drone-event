import Image from "next/image";
import Button from "src/components/atoms/Button";
import Container from "src/components/parts/Container";
import Nav from "src/components/parts/Nav";
import { company, media } from "src/contents/common";
import { fnav } from "src/contents/footer";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-main bg-main w-full">
      <Container className="mb-8 w-max text-center md:w-auto md:text-left">
        <div className="flex justify-center">
          <div className="text-3xl font-en text-center">LOGO</div>
        </div>
      </Container>
      <Container>
        <div className="text-sm text-center">&copy; 2022 logo</div>
      </Container>
    </footer>
  )
}

export default Footer;