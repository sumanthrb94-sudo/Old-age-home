import { useState } from "react";
import { X, Eye } from "lucide-react";
import { GALLERY_PHOTOS, GalleryItem } from "../data/homeData";

export function GallerySection() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-14 sm:py-18 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Photo Gallery
          </p>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
            Life at Our Bowrampet Home
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            A glimpse of our clean living rooms, daily South Indian meals, prayer space, and attentive nursing in Hyderabad.
          </p>
        </div>

        {/* 6-Photo Clean Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 transition-all hover:shadow-md"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 text-stone-900 px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-amber-800" />
                    <span>View</span>
                  </div>
                </div>
              </div>
              <div className="p-3.5">
                <h4 className="font-editorial text-sm font-bold text-stone-900">
                  {photo.title}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 text-white/80 hover:text-white bg-black/50 p-1.5 rounded-full"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full max-h-[75vh] object-contain bg-black"
              />
              <div className="p-4 bg-stone-900 text-white">
                <h3 className="font-editorial text-lg font-bold">{activePhoto.title}</h3>
                <p className="text-xs text-stone-400 mt-0.5">{activePhoto.subtitle}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
