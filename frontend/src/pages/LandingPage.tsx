import React, { useState, useEffect } from 'react';
import { Plan, BillingCycle } from '../types';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { PlansSection } from '../components/PlansSection';
import { ComparisonTable } from '../components/ComparisonTable';
import { GeneralBenefits } from '../components/GeneralBenefits';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { SubscribeModal } from '../components/SubscribeModal';
import { PaymentFeedbackModal } from '../components/PaymentFeedbackModal';

export const LandingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');
  const [feedbackStatus, setFeedbackStatus] = useState<string | null>(null);
  const [feedbackPreapprovalId, setFeedbackPreapprovalId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const preapprovalId = urlParams.get('preapproval_id');

    if (status) {
      setFeedbackStatus(status);
      setFeedbackPreapprovalId(preapprovalId);
    }
  }, []);

  const handleSubscribePlan = (plan: Plan, cycle: BillingCycle) => {
    setSelectedPlan(plan);
    setBillingCycle(cycle);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handleCloseFeedback = () => {
    setFeedbackStatus(null);
    setFeedbackPreapprovalId(null);
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#8E0E1A] selection:text-white overflow-x-hidden pt-16">
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <ProblemSection />
        <SolutionSection />
        <PlansSection onSubscribe={handleSubscribePlan} />
        <ComparisonTable />
        <GeneralBenefits />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />

      <SubscribeModal
        plan={selectedPlan}
        billingCycle={billingCycle}
        onClose={handleCloseModal}
      />

      <PaymentFeedbackModal
        status={feedbackStatus}
        preapprovalId={feedbackPreapprovalId}
        onClose={handleCloseFeedback}
      />
    </div>
  );
};
