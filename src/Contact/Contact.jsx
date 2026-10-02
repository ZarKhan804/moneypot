import { Helmet } from "react-helmet-async";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import InternalLinksArticle from "./InternalLinksArticle";
import Article from "./Article";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Moneypot777 Latest Version | Contact & Support</title>

        <meta
          name="description"
          content="Contact Moneypot777 for questions, feedback, account guidance, platform information, and general support assistance."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.moneypot777.com/contact"
        />
      </Helmet>

      <main>
        <ContactHero />
        <ContactForm />
        <InternalLinksArticle />
        <Article />
      </main>
    </>
  );
}

export default Contact;