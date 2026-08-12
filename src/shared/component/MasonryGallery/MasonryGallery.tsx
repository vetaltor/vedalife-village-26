import { useState } from 'react';
import { Preview } from './Preview';
import s from './MasonryGallery.module.css';

export type GalleryImage = {
  src: string;
  alt: string;
};

export type MasonryGalleryProps = {
  images: GalleryImage[];
  className?: string;
};

export function MasonryGallery({ images, className }: MasonryGalleryProps) {
  const [preview, setPreview] = useState<GalleryImage | null>(null);

  return (
    <>
      <ul className={className ?? s.gallery}>
        {images.map(({ src, alt }) => (
          <li key={src} className={s.galleryItem}>
            <button
              type="button"
              className={s.galleryButton}
              onClick={() => setPreview({ src, alt })}
              aria-label={`Відкрити фото: ${alt}`}
            >
              <img src={src} alt={alt} loading="lazy" />
            </button>
          </li>
        ))}
      </ul>

      {preview && <Preview image={preview} onClose={() => setPreview(null)} />}
    </>
  );
}