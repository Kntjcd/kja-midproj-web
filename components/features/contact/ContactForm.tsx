"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

interface FormState {
  name:    string;
  surname: string;
  email:   string;
  message: string;
}

const EMPTY_FORM: FormState = { name: "", surname: "", email: "", message: "" };

export default function ContactForm() {
  const [form,      setForm]      = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm(EMPTY_FORM);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className={styles.card}>
      {submitted && (
        <div className={styles.success}>✓ Message sent! We&apos;ll get back to you shortly.</div>
      )}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input id="name" name="name" className={styles.input} value={form.name} onChange={handleChange} placeholder="Value" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="surname">Surname</label>
        <input id="surname" name="surname" className={styles.input} value={form.surname} onChange={handleChange} placeholder="Value" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className={styles.input} value={form.email} onChange={handleChange} placeholder="Value" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} className={styles.textarea} value={form.message} onChange={handleChange} placeholder="Value" />
      </div>

      <button className={styles.submitBtn} onClick={handleSubmit}>Submit</button>
    </div>
  );
}