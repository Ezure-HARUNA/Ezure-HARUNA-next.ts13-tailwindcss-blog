/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        // pathname: "/collection/1346951/**",
      },
    ],
  },
};

export default nextConfig;
//  on <a href="https://unsplash.com/photos/a-keyboard-sitting-on-top-of-a-white-shelf-HFALfcK9jsw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  