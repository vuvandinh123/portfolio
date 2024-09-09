import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','avatar.vercel.sh','avatars.githubusercontent.com'],
  },
};
export default MillionLint.next({
  rsc: true,
  missingSuspenseWithCSRBailout: false,
})(nextConfig);