"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants";
import styles from "./ProjectsGrid.module.css";

const FILTER_TABS = ["All", "Recent Projects", "Website"];

export default function ProjectsGrid() {
  const [searchQuery,  setSearchQuery]  = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage,  setCurrentPage]  = useState(1);

  const ITEMS_PER_PAGE = 6;

  const filtered = PROJECTS.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFilter = activeFilter === "All" || p.tag === activeFilter;
    return matchSearch && matchFilter;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated  = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  }

  function handleFilter(filter: string) {
    setActiveFilter(filter);
    setCurrentPage(1);
  }

  return (
    <section className={styles.section}>

      {/* ── Search + Filter controls ── */}
      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Hinted search text"
            value={searchQuery}
            onChange={handleSearch}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filterGroup}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleFilter(tab)}
              className={activeFilter === tab ? styles.filterActive : styles.filterBtn}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Project cards grid ── */}
      <div className={styles.grid}>
        {paginated.length > 0 ? (
          paginated.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={`${styles.cardImg} img-placeholder`} />
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
            </div>
          ))
        ) : (
          <p className={styles.empty}>No projects match your search.</p>
        )}
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? styles.pageActive : styles.pageBtn}
            >
              {page}
            </button>
          ))}
        </div>
      )}

    </section>
  );
}