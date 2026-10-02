import { Helmet } from "react-helmet-async";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import InternalLinksArticle from "./InternalLinksArticle";

function About() {
  return (
    <>
      <Helmet>
        <title>About Moneypot777 | Gaming Platform Information</title>

        <meta
          name="description"
          content="Learn about Moneypot777, its gaming platform, available features, mobile access, account guidance, and responsible gaming information."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.moneypot777.com/about"
        />
      </Helmet>

      <main>
        <AboutHero />
        <AboutContent />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default About;