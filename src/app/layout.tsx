"use client";

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAhg4EwzaJuRN1SQEbQMxNnkhJRrJdJZS4",
  authDomain: "quicklie-distributions.firebaseapp.com",
  databaseURL: "https://quicklie-distributions-default-rtdb.firebaseio.com",
  projectId: "quicklie-distributions",
  storageBucket: "quicklie-distributions.firebasestorage.app",
  messagingSenderId: "389907780933",
  appId: "1:389907780933:web:9f461e939a40d16d4f1a2c",
  measurementId: "G-BQMVL9CVFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    isSupported()
      .then((supported) => {
        if (supported) {
          const analytics = getAnalytics(app);
          console.log("Analytics initialized:", analytics);
        } else {
          console.log("Analytics not supported in this environment.");
        }
      })
      .catch((error) =>
        console.error("Error checking analytics support:", error)
      );
  }, []);

  return (
    <html lang="en">
      <body className="antialiased bg-brand-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
