import ContactForm from "@/components/features/contact/ContactForm";
import ContactInfo  from "@/components/features/contact/ContactInfo";
import styles       from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <div className="page-divider" />
      </div>
      <section className={styles.layout}>
        <ContactForm />
        <ContactInfo />
      </section>
    </>
  );
}