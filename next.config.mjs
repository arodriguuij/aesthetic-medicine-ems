import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
});
console.log({env: process.env.NEXT_PUBLIC_MAINTENANCE_MODE})

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
      process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
        ? {
            source: "/((?!maintenance).*)",
            destination: "/maintenance",
            permanent: false,
          }
        : null,
    ].filter(Boolean)
  },
};

export default withAutoCert(nextConfig);
