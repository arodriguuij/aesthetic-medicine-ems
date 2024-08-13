import { Cloudinary } from "@cloudinary/url-gen";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "rn-employee-app",
  },
});

const normalizeSrc = (src: string) => (src[0] === "/" ? src.slice(1) : src);

export const cloudinaryLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width?: any;
  quality?: any;
}) => {
  const params = [
    "f_auto",
    "c_limit",
    "w_" + width,
    "q_" + (quality || "auto"),
  ];
  return `https://res.cloudinary.com/${
    process.env.NEXT_PUBLIC_CLOUDINARY_NAME
  }/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}/${normalizeSrc(
    src
  )}`;
};
