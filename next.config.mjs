import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com", port:'' }],
  },
};

export default withAutoCert(nextConfig);
