import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/catalogue';
export const metadata: Metadata = {
  title: 'Contacts',
  description:
    'Contact E&C Internetwork in Bangkok for product enquiries, consultation, system design, installation and maintenance.',
};
export default function ContactsPage() {
  return (
    <>
      <PageIntro
        title="Let’s talk."
        description="For product information, project requirements or support, contact our team in Bangkok."
        items={[{ name: 'Contacts' }]}
      />
      <section className="wrap contact-layout">
        <div>
          <h2>E&amp;C Internetwork Co., Ltd.</h2>
          <div className="contact-block">
            <h3>Email</h3>
            <a href="mailto:info@eci-inter.com">info@eci-inter.com</a>
          </div>
          <div className="contact-block">
            <h3>Telephone</h3>
            <a href="tel:+6626810100">+66 2 681 0100</a>
            <a href="tel:+66872061000">+66 87 206 1000</a>
          </div>
          <div className="contact-block">
            <h3>Visit us</h3>
            <p>
              414/6 Nonsi Road, Chongnonsi,
              <br />
              Yannawa, Bangkok 10120, Thailand
            </p>
            <a
              className="text-link directions"
              href="https://www.google.com/maps/search/?api=1&query=414%2F6%20Nonsi%20Road%20Chongnonsi%20Yannawa%20Bangkok%2010120"
              target="_blank"
              rel="noopener noreferrer"
            >
              View directions <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
        <aside className="contact-note">
          <h2>Tell us what you need.</h2>
          <p>
            Include the product or service you’re interested in, your
            organisation and a brief outline of your requirements.
          </p>
          <p>
            For existing equipment, a model name or reference will help us
            direct your enquiry.
          </p>
          <a
            className="button button-blue"
            href="mailto:info@eci-inter.com?subject=Enquiry%20to%20ECI"
          >
            Email the ECI team <ArrowUpRight size={20} />
          </a>
          <p className="email-note">Opens your email application.</p>
        </aside>
      </section>
    </>
  );
}
