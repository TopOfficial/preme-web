"use client";
import { useState } from "react";
import type { Picture } from "@/lib/catalogue";
export function ProductGallery({ images }: { images: Picture[] }) {
  const [index, setIndex] = useState(0);
  const selected = images[index] || images[0];
  return (
    <div className="gallery">
      <figure>
        <img src={selected.src} alt={selected.alt} />
        {selected.caption && <figcaption>{selected.caption}</figcaption>}
      </figure>
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              aria-label={`View image ${i + 1}: ${image.alt}`}
              aria-pressed={index === i}
              onClick={() => setIndex(i)}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
