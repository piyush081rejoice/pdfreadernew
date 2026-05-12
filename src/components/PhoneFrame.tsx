import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  rotate?: number;
};

export function PhoneFrame({ src, alt, className = "", delay = 0, rotate = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay }}
      style={{ rotate: `${rotate}deg` }}
      className={`relative ${className}`}
    >
      <div className="animate-float">
        <div className="relative mx-auto w-[260px] sm:w-[280px] rounded-[2.6rem] bg-neutral-900 p-3 shadow-glow ring-1 ring-black/10">
          {/* Notch */}
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />
          <div className="overflow-hidden rounded-[2rem] bg-white">
            <img src={src} alt={alt} className="block h-[560px] w-full object-cover object-top" loading="lazy" />
          </div>
          {/* Side buttons */}
          <div className="absolute -left-[3px] top-24 h-12 w-[3px] rounded-l bg-neutral-800" />
          <div className="absolute -left-[3px] top-40 h-16 w-[3px] rounded-l bg-neutral-800" />
          <div className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-r bg-neutral-800" />
        </div>
      </div>
    </motion.div>
  );
}
