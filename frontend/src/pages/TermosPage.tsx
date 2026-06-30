import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { TERMOS_CONTENT } from '../data/legalContent';

export const TermosPage: React.FC = () => (
  <LegalPageLayout document={TERMOS_CONTENT} />
);
