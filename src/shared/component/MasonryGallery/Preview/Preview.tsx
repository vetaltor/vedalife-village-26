import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { GalleryImage } from '../MasonryGallery';
import s from './Preview.module.css';

export type PreviewProps = {
  image: GalleryImage;
  onClose: () => void;
};

export function Preview({ image, onClose }: PreviewProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className={s.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <img className={s.lightboxImage} src={image.src} alt={image.alt} />
      <button
        type="button"
        className={s.lightboxClose}
        onClick={onClose}
        aria-label="Закрити"
      >
        <X size={28} aria-hidden="true" />
      </button>
    </div>
  );
}