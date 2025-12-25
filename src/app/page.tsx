"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import AnimatedStarfield from "@/components/AnimatedStarfield";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Animated background */}
      <AnimatedStarfield />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Products />
        <Philosophy />
        <Footer />
      </div>
    </main>
  );
}
