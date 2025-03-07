"use client";

import Image from "next/image";
import { urlForRatio } from "@sanity/lib/image";
import { SanityImageMetadata } from "@sanity/types/sanity.types";
import { cn } from "@01works/tw";

interface SanityImageProps {
  image: {
    ref?: string;
    metadata: SanityImageMetadata | null;
  };
  alt: string;
  size: 400 | 800 | 1200;
  className?: string;
  onLoad?: () => void;
}

export function SanityImage({
  image,
  alt,
  size,
  className,
  onLoad,
}: SanityImageProps) {
  return (
    <div className={cn("relative size-full", className)}>
      {image.ref ? (
        <Image
          className="size-full object-cover transition-opacity duration-300"
          src={urlForRatio(image.ref, size) || ""}
          alt={alt}
          width={size}
          height={size / (image.metadata?.dimensions?.aspectRatio || 1)}
          placeholder="blur"
          blurDataURL={image.metadata?.lqip || ""}
          onLoad={onLoad}
        />
      ) : (
        <div
          className="aspect-square size-full p-[7px]"
          style={
            {
              // backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
              // backgroundSize: '4px 4px',
            }
          }
        >
          <div className="bg-primary-1000 size-full" />
        </div>
      )}
    </div>
  );
}
