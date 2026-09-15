import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/site/ui/ArrowIcon";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

const PATHS = [
  {
    image: "/photography/linden-market.jpg",
    title: "Become a Founding Neighbour",
    excerpt:
      "We are recognizing the first 1,000 residents who register early. Help shape Hello Linden before launch and get early platform access.",
    category: "For Residents",
    cta: "Register",
    href: "#founding-neighbours",
  },
  {
    image: "/photography/goddess-cafe-linden.jpg",
    title: "Put Your Business on the Neighbourhood Map",
    excerpt:
      "Hello Linden is not another directory. It is an active local ecosystem built to help independent businesses connect directly with residents living around them.",
    category: "For Businesses",
    cta: "Register",
    href: "#businesses",
  },
  {
    image: "/photography/whippet-linden.jpg",
    title: "Partnering to Build Stronger Local Communities",
    excerpt:
      "We are actively holding discussions with selected founding partners, strategic brands, community organizations, and investors who share our vision.",
    category: "Partners & Investors",
    cta: "Partner With Hello",
    href: "#partners",
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="relative bg-white py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-start gap-10">
        <div className="flex flex-col items-start gap-5">
          <SectionEyebrow label="Join Hello Linden" tone="light" />
          <h2 className="m-0 type-h2 text-hh-onyx">How would you like to get involved?</h2>
        </div>

        <ul className="m-0 grid w-full list-none grid-cols-1 gap-10 p-0 split:grid-cols-3 split:gap-5">
          {PATHS.map((path) => (
            <li key={path.href} className="flex flex-col gap-5">
              <Link
                href={path.href}
                tabIndex={-1}
                aria-hidden="true"
                className="relative block h-[230px] w-full overflow-clip rounded-card"
              >
                <Image
                  src={path.image}
                  alt=""
                  fill
                  sizes="(min-width: 810px) 420px, 100vw"
                  className="object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col gap-[30px]">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="m-0 type-h3 text-hh-onyx">{path.title}</h3>
                  <p className="m-0 type-body text-hh-muted">{path.excerpt}</p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-5">
                  <span className="text-[16px] leading-6 text-hh-onyx">{path.category}</span>
                  <Link
                    href={path.href}
                    className="group flex items-center gap-[10px] rounded-chip text-[16px] font-bold leading-6 text-hh-hunter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
                  >
                    {path.cta}
                    <span className="sr-only">: {path.title}</span>
                    <ArrowIcon size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
