import { ScrollRevealText } from "@/components/site/ui/ScrollRevealText";

// The founder's own words on plain white, straight under the About hero.
// Takes the top padding only; the next section supplies the gap below.
export function FounderQuote() {
  return (
    <section className="relative bg-white pt-[100px] split:pt-[130px]">
      <div className="site-container">
        <figure className="m-0 flex flex-col items-center text-center">
          <blockquote className="m-0 max-w-[1000px]">
            <ScrollRevealText
              className="font-heading text-[32px] font-semibold leading-[1.1] tracking-[-1.5px] text-hh-onyx split:text-[48px]"
              lines={[
                {
                  text: "“The goal is not to replace the conversations, relationships and community networks that already exist. It’s to strengthen them.”",
                },
              ]}
            />
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
