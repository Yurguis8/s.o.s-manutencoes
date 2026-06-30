import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { PRIVACIDADE_CONTENT } from '../data/legalContent';

export const PrivacidadePage: React.FC = () => (
  <LegalPageLayout document={PRIVACIDADE_CONTENT} />
);
