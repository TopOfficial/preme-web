import type { Metadata } from "next";
import { PageIntro, ContactBand } from "@/components/catalogue";
import { Arrow } from "@/components/icons";
export const metadata: Metadata = { title: "Support" };
const services = [
  [
    "Consultation",
    "Start with the task.",
    "We discuss your operating environment, equipment needs and project requirements to help identify suitable options.",
  ],
  [
    "System design",
    "Connect the parts.",
    "Bring hardware, software and infrastructure together around the way your team needs to work.",
  ],
  [
    "Installation",
    "Prepare for operation.",
    "Discuss installation and setup support for the equipment supplied, with scope agreed around your site and project.",
  ],
  [
    "Maintenance",
    "Support what is in service.",
    "Speak with our team about servicing, maintenance and support arrangements for your equipment.",
  ],
  [
    "Training",
    "Build practical understanding.",
    "Our company profile includes technical training and knowledge-sharing sessions. Contact us to discuss training requirements for your team.",
  ],
];
export default function Support() {
  return (
    <>
      <PageIntro
        title="Here for the whole project."
        description="From understanding your requirements to supporting equipment in use. Practical assistance from the ECI team in Thailand."
        items={[{ name: "Support" }]}
      />
      <div className="container support-photo">
        <img
          src="/images/training-session-participants.webp"
          alt="Participants in an ECI technical training session"
        />
      </div>
      <section className="container section support-services">
        {services.map(([title, heading, description]) => (
          <article key={title}>
            <h2>{title}</h2>
            <div>
              <h3>{heading}</h3>
              <p>{description}</p>
              <a href="/contacts?topic=support" className="text-link">
                Discuss {title.toLowerCase()} <Arrow diagonal />
              </a>
            </div>
          </article>
        ))}
      </section>
      <ContactBand />
    </>
  );
}
