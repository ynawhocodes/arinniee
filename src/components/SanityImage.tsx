"use client";

import Image from "next/image";
import { urlForRatio } from "@sanity/lib/image";
import { SanityImageMetadata } from "@sanity/types/sanity.types";
import { cn } from "@01works/tw";
import { useState } from "react";

interface SanityImageProps {
  image: {
    ref?: string;
    metadata: SanityImageMetadata | null;
  };
  alt: string;
  size: 400 | 800 | 1200;
  className?: string;
  style?: React.CSSProperties;
}

export function SanityImage({
  image,
  alt,
  size,
  className,
  style,
}: SanityImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative size-fit", className)} style={style}>
      {image.metadata?.lqip && (
        <div
          className="absolute inset-0 object-cover"
          style={{
            backgroundImage: `url(${image.metadata.lqip})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          hidden={isLoaded}
        />
      )}
      {image.ref ? (
        <Image
          className="size-full object-cover"
          src={urlForRatio(image.ref, size) || ""}
          style={{
            opacity: isLoaded ? 1 : 0,
          }}
          alt={alt}
          width={size}
          height={size / (image.metadata?.dimensions?.aspectRatio || 1)}
          onLoad={() => setIsLoaded(true)}
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
