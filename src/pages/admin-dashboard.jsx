// src/pages/admin-dashboard.jsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/AdminDashboard.module.css";
import AdminUploader from "@/components/AdminUploader"; // ✅ Import uploader

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      router.push("/admin-login");
    }
  }, []);

  return (
    <main className={styles.adminPage}>
      <Head>
        <title>Admin Dashboard | Ronny Ramsey Photography</title>
      </Head>

      <h1 className={styles.heading}>Admin Dashboard</h1>

      {/* ✅ AdminUploader integrated here */}
      <section className={styles.panel}>
        <h2>Upload & Watermark Photos</h2>
        <AdminUploader />
      </section>

      {/* ✅ Messages panel with email redirect */}
      <section className={styles.panel}>
        <h2>Messages</h2>
        <a
          href="https://outlook.live.com/mail/0/inbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Inbox</button>
        </a>
      </section>

      <section className={styles.panel}>
        <h2>Settings</h2>
        <button>Site Settings</button>
        <button>Account & Security</button>
      </section>
    </main>
  );
}