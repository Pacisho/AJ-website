"use client";
import React from "react";

export default function AppDevelopmentPage() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
      paddingBottom: "40px",
    },
    header: {
      background: "linear-gradient(to right, #25bb48ff, #1cb386ff)",
      color: "white",
      padding: "30px 20px",
      textAlign: "center",
    },
    section: {
      maxWidth: "960px",
      margin: "auto",
      padding: "40px 20px",
    },
    box: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    heading: {
      color: "#28a745",
    },
    footer: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#eee",
      marginTop: "40px",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>App Development คืออะไร?</h1>
        <p>การพัฒนาแอปพลิเคชันบนมือถือและอุปกรณ์อื่น ๆ</p>
      </header>

      <section style={styles.section}>
        <div style={styles.box}>
          <h2 style={styles.heading}>1. Mobile App Development</h2>
          <p>
            การพัฒนาแอปสำหรับอุปกรณ์พกพา เช่น iOS และ Android โดยใช้เครื่องมืออย่าง Flutter, React Native, Kotlin, Swift
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>2. Native vs Cross-platform</h2>
          <p>
            - Native: เขียนแยกตามระบบ (iOS = Swift, Android = Kotlin)
            <br />
            - Cross-platform: เขียนครั้งเดียวใช้ได้หลายระบบ เช่น React Native, Flutter
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>3. Backend สำหรับแอป</h2>
          <p>
            แอปส่วนใหญ่ต้องมีเซิร์ฟเวอร์รองรับ เช่น API, ฐานข้อมูล (Firebase, Supabase, Node.js, PHP)
          </p>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2025 AppDev Thai | Phatdanai Kaeochan
      </footer>
    </div>
  );
}
