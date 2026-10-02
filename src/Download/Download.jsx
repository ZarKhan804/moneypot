import { Helmet } from "react-helmet-async";
import DownloadHero from "./DownloadHero";
import InternalLinksArticle from "./InternalLinksArticle";
import Article from "./Article";

function Download() {
  return (
    <>
      <Helmet>
        <title>Moneypot777 Download in Pakistan | Latest Version</title>

        <meta
          name="description"
          content="Learn how to access Moneypot777 on compatible mobile devices, explore download information, platform features, account guidance, and gaming resources in Pakistan."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.moneypot777.com/download"
        />
      </Helmet>

      <main>
        <DownloadHero />
        <InternalLinksArticle />
        <Article />
      </main>
    </>
  );
}

export default Download;