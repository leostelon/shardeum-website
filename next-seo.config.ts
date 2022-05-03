import { DefaultSeoProps } from "next-seo";

const defaultSEOValues: DefaultSeoProps = {
  title: "Shardeum | EVM Compatible Sharded Layer 1 Blockchain",
  description:
    "Shardeum is the world's first EVM based L1 blockchain that truly solves scalability trilemma with linear scaling and low gas fees forever",
  canonical: "https://shardeum.org",

  openGraph: {
    title: "Shardeum | EVM Compatible Sharded Layer 1 Blockchain",
    type: "website",
    url: "https://shardeum.org",

    description:
      "Shardeum is the world's first EVM based L1 blockchain that truly solves scalability trilemma with linear scaling and low gas fees forever",
    images: [
      {
        url: "https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png",
        alt: "Shardeum Image",
      },
    ],
  },

  twitter: {
    cardType: "summary_large_image",
    site: "https://shardeum.org",
    handle: "@shardeum",
  },
};

export default defaultSEOValues;
