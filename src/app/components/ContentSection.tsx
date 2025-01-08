import { StickyHeader } from "./StickyHeader";

type ContentSectionProps = {
  id: string;
  children: React.ReactNode;
};

export function ContentSection({ id, children }: ContentSectionProps) {
  return (
    <section
      id={id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <StickyHeader title={id} />
      {children}
    </section>
  );
}
