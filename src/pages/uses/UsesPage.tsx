import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SimpleLayout } from "@/layouts/SimpleLayout";
import { USES_PAGE_META, USES_SECTIONS } from "@/constants/usesPlaceholders";

function ToolsSection(
  props: React.ComponentPropsWithoutRef<typeof Section>
) {
  const { children, ...rest } = props;
  return (
    <Section {...rest}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  const Title = () => {
    if (!href) return <h3 className="text-base font-semibold">{title}</h3>;
    const external = /^https?:/i.test(href) || href.startsWith("mailto:");
    return (
      <h3 className="text-base font-semibold">
        <a
          href={href}
          className="group inline-flex items-center hover:text-teal-500 dark:hover:text-teal-400"
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {title}
        </a>
      </h3>
    );
  };

  return (
    <Card as="li">
      <Title />
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function UsesPage() {
  return (
    <SimpleLayout
      title={USES_PAGE_META.title}
      intro={USES_PAGE_META.intro}
    >
      <div className="space-y-20">
        {USES_SECTIONS.map((section, idx) => (
          <ToolsSection key={idx} title={section.sectionTitle}>
            {section.tools.map((tool, tIdx) => (
              <Tool key={tIdx} title={tool.title}>
                {tool.description}
              </Tool>
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  );
}
