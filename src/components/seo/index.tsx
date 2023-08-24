import { DefaultSeo as NextDefaultSeo } from "next-seo";
import siteSettings from "@utils/siteSettings/siteSettings.json";

export const DefaultSeo = () => {
  return (
    <NextDefaultSeo
      title={siteSettings.title}
      titleTemplate={`${siteSettings.name} | %s`}
      defaultTitle={siteSettings.title}
      description={siteSettings.description}
      canonical="https://drshrutimalik.com/"
      openGraph={{
        type: "website",
        locale: "en_IE",
        site_name: siteSettings.name,
        images: [
          {
            url: siteSettings.ogImageUrl,
            width: 800,
            height: 600,
            alt: "Og radix-logo",
          },
          {
            url: siteSettings.ogImageUrl,
            width: 900,
            height: 800,
            alt: "Og radix-logo",
          },
        ],
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1 maximum-scale=1",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          name: "msapplication-TileImage",
          content: "/android-chrome-192x192.png",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ]}
    />
  );
};
