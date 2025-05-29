"use client";

import { X } from "lucide-react";

interface PhotoGalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface PhotoGalleryModalProps {
  images: PhotoGalleryImage[];
  onClose: () => void;
  onImageClick: (index: number) => void;
}

export function PhotoGalleryModal({
  images,
  onClose,
  onImageClick,
}: PhotoGalleryModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full p-4 max-w-6xl max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white z-10 px-4  flex items-center justify-between">
          <h2 className="text-xl font-bold">Grand Crest Hotel - All Photos</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative  aspect-[4/3] cursor-pointer"
              onClick={() => onImageClick(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
