import React, { useEffect } from 'react';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import DifferentiatorsSection from '../components/landing/DifferentiatorsSection';
import SocialProofSection from '../components/landing/SocialProofSection';
import PricingSection from '../components/landing/PricingSection';
import ComparisonTable from '../components/landing/ComparisonTable';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';
import SEO from '../components/SEO';
import { OrganizationSchema, SoftwareSchema } from '../components/Schema';

export default function Home() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add fade-in animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    // First section should be visible immediately
    if (sections[0]) {
      sections[0].style.opacity = '1';
      sections[0].style.transform = 'translateY(0)';
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <OrganizationSchema />
      <SoftwareSchema />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DifferentiatorsSection />
      <SocialProofSection />
      <PricingSection />
      <ComparisonTable />
      <FinalCTA />
      <Footer />
    </div>
  );
}