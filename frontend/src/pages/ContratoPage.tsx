import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { CONTRATO_CONTENT } from '../data/legalContent';

export const ContratoPage: React.FC = () => (
  <LegalPageLayout document={CONTRATO_CONTENT} />
);
