import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { CONSENTIMENTO_CONTENT } from '../data/legalContent';

export const ConsentimentoPage: React.FC = () => (
  <LegalPageLayout document={CONSENTIMENTO_CONTENT} />
);
