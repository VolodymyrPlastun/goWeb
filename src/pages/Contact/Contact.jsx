import ContactForm from "../../components/ContactForm/ContactForm";
import ContactImg from "../../components/ContactImg/ContactImg";
import { Box } from "./Contact.styled";

export default function Contact() {
  return (
    <Box>
      <ContactImg />
      <ContactForm />
    </Box>
  );
}
