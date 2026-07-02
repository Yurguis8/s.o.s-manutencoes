import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

const FRAME_COUNT = 34;
const SCROLL_HEIGHT_VH = 280;

/**
 * ─── Ajuste o tamanho da animação aqui ───────────────────────────────────────
 *
 * IMAGE_MAX_WIDTH   Largura máxima do quadro (px). Aumente para imagem maior.
 * IMAGE_ASPECT      Proporção largura/altura. Ex: 16/9 (paisagem), 4/3, 16/10.
 *                   Quanto mais largo, menos corte nas laterais (com FRAME_SCALE).
 * FRAME_SCALE       1.0 = preenche o quadro (pode cortar bordas).
 *                   0.85–0.95 = imagem um pouco menor, mostra mais nas laterais.
 */
const IMAGE_MAX_WIDTH = { base: 400, sm: 480, lg: 560 } as const;
const IMAGE_ASPECT = 15 / 15;
const FRAME_SCALE = 1.19;

const frameUrls = Array.from({ length: FRAME_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return new URL(
    `../../framesforanimation-jpg/frame_${num}.png`,
    import.meta.url
  ).href;
});

function drawFrameFit(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
  scale: number
) {
  const imgRatio = img.width / img.height;
  const canvasRatio = width / height;

  let drawWidth: number;
  let drawHeight: number;

  if (imgRatio > canvasRatio) {
    drawWidth = width * scale;
    drawHeight = drawWidth / imgRatio;
  } else {
    drawHeight = height * scale;
    drawWidth = drawHeight * imgRatio;
  }

  const offsetX = (width - drawWidth) / 2;
  const offsetY = (height - drawHeight) / 2;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

type LayoutMode = 'BEFORE' | 'FIXED' | 'AFTER';

export const ScrollAnimationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const lastSizeRef = useRef({ width: 0, height: 0 });

  const [isLoaded, setIsLoaded] = useState(false);
  const [frameProgress, setFrameProgress] = useState(0);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('BEFORE');

  const renderFrame = useCallback((frameIndex: number, force = false) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const images = imagesRef.current;

    if (!canvas || !container || !images[frameIndex]) return;

    const { width, height } = container.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const sizeChanged =
      width !== lastSizeRef.current.width ||
      height !== lastSizeRef.current.height;

    if (!force && !sizeChanged && currentFrameRef.current === frameIndex) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    drawFrameFit(ctx, images[frameIndex], width, height, FRAME_SCALE);
    currentFrameRef.current = frameIndex;
    lastSizeRef.current = { width, height };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const images = frameUrls.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    imagesRef.current = images;

    Promise.all(
      images.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) resolve();
            else {
              img.onload = () => resolve();
              img.onerror = () => resolve();
            }
          })
      )
    ).then(() => {
      setIsLoaded(true);
      renderFrame(prefersReducedMotion ? FRAME_COUNT - 1 : 0, true);
    });
  }, [renderFrame]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !isLoaded) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId = 0;

    const updateFrame = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = section.offsetHeight - vh;

      if (scrollable <= 0) return;

      if (rect.top > 0) {
        setLayoutMode('BEFORE');
      } else if (rect.bottom <= vh) {
        setLayoutMode('AFTER');
      } else {
        setLayoutMode('FIXED');
      }

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = scrolled / scrollable;

      const frameIndex = Math.min(
        Math.floor(progress * (FRAME_COUNT - 1)),
        FRAME_COUNT - 1
      );

      setFrameProgress(progress);
      renderFrame(frameIndex);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateFrame);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateFrame();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isLoaded, renderFrame]);

  const hintOpacity = frameProgress < 0.95 ? 1 - frameProgress * 0.6 : 0;

  const panelClass =
    layoutMode === 'FIXED'
      ? 'fixed inset-0 z-30'
      : layoutMode === 'AFTER'
        ? 'absolute bottom-0 left-0 right-0'
        : 'absolute top-0 left-0 right-0';

  return (
    <section
      id="nosso-trabalho"
      ref={sectionRef}
      className="relative bg-surface border-b border-border w-full"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
    >
      <div className={`${panelClass} h-screen flex items-center bg-white`}>
        <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
              Transformação real
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              Nosso trabalho na{' '}
              <span className="text-brand">sua casa</span>
            </h2>

            <p className="mt-4 text-base text-gray-500 font-normal leading-relaxed">
              Da bagunça à organização — veja como transformamos sua cozinha com cuidado e precisão técnica.
            </p>

            <div
              className="mt-8 flex items-center gap-2"
              style={{ opacity: hintOpacity }}
            >
              <ChevronDown className="w-4 h-4 text-brand animate-bounce" />
              <span className="text-xs text-foreground-subtle font-medium tracking-wide uppercase">
                Role para ver a transformação
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2">
            <div
              ref={containerRef}
              className="relative w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[560px] bg-surface overflow-hidden"
              style={{ aspectRatio: String(IMAGE_ASPECT) }}
            >
              <canvas
                ref={canvasRef}
                className={`block w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              />

              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface">
                  <div className="w-8 h-8 border-2 border-brand/30 border-t-brand rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
