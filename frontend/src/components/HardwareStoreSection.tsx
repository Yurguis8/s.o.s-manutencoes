import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Handshake, Minus, Plus } from 'lucide-react';
import {
  HARDWARE_PRODUCTS,
  PARTNER_INFO,
  getHardwareOrderWhatsAppUrl,
} from '../data/landingData';
import { HardwareProduct } from '../types';
import { Reveal } from './Reveal';

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 99;

interface ProductCardProps {
  product: HardwareProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(MIN_QUANTITY);
  const [imageError, setImageError] = useState(false);
  const total = product.price * quantity;

  const decrease = () => setQuantity((q) => Math.max(MIN_QUANTITY, q - 1));
  const increase = () => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1));

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(e.target.value, 10);
    if (Number.isNaN(parsed)) return;
    setQuantity(Math.min(MAX_QUANTITY, Math.max(MIN_QUANTITY, parsed)));
  };

  return (
    <article className="snap-start shrink-0 w-[280px] sm:w-[300px] flex flex-col bg-surface-card border border-border rounded-xl overflow-hidden h-full">
      <div className="relative h-40 bg-surface-muted border-b border-border overflow-hidden">
        {!imageError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-foreground-subtle">
            Imagem indisponível
          </div>
        )}
        <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface/90 backdrop-blur-sm border border-border text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-xs text-foreground-muted leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        <div className="mb-4">
          <label htmlFor={`qty-${product.id}`} className="block text-[10px] font-semibold uppercase tracking-wider text-foreground-subtle mb-2">
            Quantidade
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decrease}
              disabled={quantity <= MIN_QUANTITY}
              aria-label="Diminuir quantidade"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-foreground-muted hover:text-foreground hover:border-brand/40 transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <input
              id={`qty-${product.id}`}
              type="number"
              min={MIN_QUANTITY}
              max={MAX_QUANTITY}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-12 h-8 text-center text-sm font-semibold text-foreground bg-surface-muted border border-border rounded-lg focus:outline-none focus:border-brand/50 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button
              type="button"
              onClick={increase}
              disabled={quantity >= MAX_QUANTITY}
              aria-label="Aumentar quantidade"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-foreground-muted hover:text-foreground hover:border-brand/40 transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-end justify-between gap-3 mb-3">
            <div>
              <span className="text-lg font-bold text-foreground">{formatCurrency(total)}</span>
              {quantity > 1 && (
                <span className="block text-[10px] text-foreground-subtle mt-0.5">
                  {formatCurrency(product.price)} cada
                </span>
              )}
              <span className="block text-[10px] text-foreground-subtle font-mono mt-0.5">
                {product.sku}
              </span>
            </div>
          </div>
          <a
            href={getHardwareOrderWhatsAppUrl(product, quantity)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2.5 rounded-lg bg-brand hover:bg-brand-hover text-white text-xs font-semibold text-center transition-colors duration-200"
          >
            Comprar pelo WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};

export const HardwareStoreSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);

    const cardWidth = track.firstElementChild?.clientWidth ?? 300;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, HARDWARE_PRODUCTS.length - 1));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.firstElementChild?.clientWidth ?? 300;
    track.scrollBy({
      left: direction === 'left' ? -(cardWidth + 24) : cardWidth + 24,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.firstElementChild?.clientWidth ?? 300;
    track.scrollTo({ left: index * (cardWidth + 24), behavior: 'smooth' });
  };

  return (
    <section id="loja-ferragens" className="py-24 bg-surface border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-muted border border-border text-xs font-medium text-foreground-muted mb-4">
            <Handshake className="w-3.5 h-3.5 text-brand" />
            <span>{PARTNER_INFO.label}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            Loja de ferragens
          </h2>
          <p className="text-base text-foreground-muted max-w-2xl leading-relaxed">
            Peças e acessórios para móveis planejados, com curadoria técnica da S.O.S Manutenções
            em parceria com a {PARTNER_INFO.name}. Escolha a quantidade e finalize pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Produto anterior"
              className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-surface-card border border-border text-foreground-muted hover:text-foreground hover:border-brand/40 transition-colors disabled:opacity-30 disabled:pointer-events-none shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Próximo produto"
              className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-surface-card border border-border text-foreground-muted hover:text-foreground hover:border-brand/40 transition-colors disabled:opacity-30 disabled:pointer-events-none shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              ref={trackRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1"
            >
              {HARDWARE_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {HARDWARE_PRODUCTS.map((product, index) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Ir para ${product.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'w-6 bg-brand' : 'w-1.5 bg-border hover:bg-foreground-subtle'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
