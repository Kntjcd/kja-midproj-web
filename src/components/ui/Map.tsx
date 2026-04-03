// src/components/ui/Map.tsx
import styles from "./Map.module.css";

export default function Map() {
  return (
    <div className={styles.mapContainer}>
      <iframe 
        src="http://googleusercontent.com/maps.google.com/4" 
        width="100%"   /* Changed from 600 to 100% for responsiveness */
        height="450" 
        style={{ border: 0 }} /* React uses double curly braces for inline styles */
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="KJA Digital Marketing Solutions Location"
      />
    </div>
  );
}