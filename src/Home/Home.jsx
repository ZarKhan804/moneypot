import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import GameSection from "./GameSection";
import ContentSection from "./ContentSection";
import InternalLinksArticle from "./InternalLinksArticle";

function Home() {
  return (
    <>
      <Helmet>
        <title>Moneypot777 Real Game in Pakistan | Online Gaming</title>

        <meta
          name="description"
          content="Explore Moneypot777, including gaming features, mobile access, account information, promotions, download guidance, and responsible gaming information."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.moneypot777.com/"
        />
      </Helmet>

      <main>
        <HeroSection />
        <GameSection />
        <ContentSection />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Home;