import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", port: "" },
    ],
  },

  redirects() {
    return [
      process.env.MAINTENANCE_MODE === "1"
        ? {
            source: "/((?!maintenance).*)",
            destination: "/maintenance.html",
            permanent: false,
          }
        : null,
    ].filter(Boolean)
  },
};

export default withAutoCert(nextConfig);
