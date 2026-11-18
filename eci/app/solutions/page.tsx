import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/catalogue';
export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'ECI provides consultation, system design, installation and maintenance alongside defence and security product distribution.',
};
const services = [
  {
    id: 'consultation',
    title: 'Consultation',
    description:
      'Start with your requirements. We discuss the operating environment, equipment needs and practical considerations to help identify suitable products and support.',
    action: 'Discuss your requirements',
  },
  {
    id: 'system-design',
    title: 'System design',
    description:
      'Bring the equipment and the application together. We help plan how selected products fit your requirements, with attention to compatibility, installation and ongoing use.',
    action: 'Discuss a system',
  },
  {
    id: 'installation',
    title: 'Installation',
    description:
      'Prepare equipment for use. We provide installation support for supplied products, with the scope agreed around the equipment, site and project requirements.',
    action: 'Ask about installation',
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'Keep your equipment supported. Contact ECI to discuss maintenance needs, servicing arrangements and support for the products we supply.',
    action: 'Request maintenance support',
  },
];
export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        title="From selection to service."
        description="Practical support around the products we supply. Four services, one team to contact."
        items={[{ name: 'Solutions' }]}
      />
      <section className="wrap service-list">
        {services.map((service) => (
          <article className="service-row" id={service.id} key={service.id}>
            <h2>{service.title}</h2>
            <div>
              <p>{service.description}</p>
              <a
                className="text-link"
                href={`mailto:info@eci-inter.com?subject=${encodeURIComponent(`${service.title} enquiry`)}`}
              >
                {service.action} <ArrowUpRight size={19} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
