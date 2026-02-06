import { colors } from "@/lib/colors";

export const FlipLinks = () => {
  return (
    <section className="flex flex-col gap-1">
      <FlipLink href="">Websites</FlipLink>
      <FlipLink href="">IOS</FlipLink>
      <FlipLink href="">Android</FlipLink>
      <FlipLink href="">Custom Software</FlipLink>
      <FlipLink href="">ERP</FlipLink>
    </section>
  );
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a
      href={href}
      className="group relative block overflow-hidden whitespace-nowrap text-2xl font-black uppercase sm:text-3xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{
              transitionDelay: `${i * 25}ms`,
              color: colors.primary[400]
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{
              transitionDelay: `${i * 25}ms`,
              color: colors.accent[100]
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  );
};

export { FlipLink };
