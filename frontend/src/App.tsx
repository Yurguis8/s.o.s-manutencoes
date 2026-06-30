import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { PrivacidadePage } from './pages/PrivacidadePage';
import { ConsentimentoPage } from './pages/ConsentimentoPage';
import { ContratoPage } from './pages/ContratoPage';
import { TermosPage } from './pages/TermosPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacidade" element={<PrivacidadePage />} />
      <Route path="/consentimento" element={<ConsentimentoPage />} />
      <Route path="/contrato" element={<ContratoPage />} />
      <Route path="/termos" element={<TermosPage />} />
    </Routes>
  );
}
