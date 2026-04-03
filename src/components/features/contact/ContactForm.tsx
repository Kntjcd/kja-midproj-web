"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

interface FormState {
  name: string;
  surname: string;
  email: string;
  message: string;
}

const EMPTY_FORM: FormState = { 
  name: "", 
  surname: "", 
  email: "", 
  message: "" 
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    // Added form.surname to the validation check
    if (!form.name || !form.surname || !form.email || !form.message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // In a real scenario, you would send the 'form' object to an API here
    console.log("Form Submitted:", form);
    
    setSubmitted(true);
    setForm(EMPTY_FORM);

    // Hide success message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className={styles.card}>
      {submitted && (
        <div className={styles.success}>
          ✓ Message sent! We&apos;ll get back to you shortly.
        </div>
      )}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">First Name</label>
        <input 
          id="name" 
          name="name" 
          className={styles.input} 
          value={form.name} 
          onChange={handleChange} 
          placeholder="e.g. Juan" 
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="surname">Last Name</label>
        <input 
          id="surname" 
          name="surname" 
          className={styles.input} 
          value={form.surname} 
          onChange={handleChange} 
          placeholder="e.g. Dela Cruz" 
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email Address</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          className={styles.input} 
          value={form.email} 
          onChange={handleChange} 
          placeholder="juan.delacruz@example.com" 
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          className={styles.textarea} 
          value={form.message} 
          onChange={handleChange} 
          placeholder="Tell us about your project or inquiry..." 
        />
      </div>

      <button 
        className={styles.submitBtn} 
        onClick={handleSubmit}
        disabled={submitted} // Prevents double-submission
      >
        {submitted ? "Sending..." : "Submit Message"}
      </button>
    </div>
  );
}