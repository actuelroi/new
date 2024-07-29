import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { images } from "@/constant/imageUrl";
import Image from "next/image";


export function ImageGrid() {
  return (
    <section id="photos " className="  p-8 ">
        
            <div className="columns-2  sm:columns-3">
                {images.map((image, idx) => (
                <BlurFade key={image.imageUrl} delay={0.25 + idx * 0.05} inView>
                    <Image
                    className="mb-4 size-full rounded-lg object-contain "
                    src={image.imageUrl}
                    alt={`Image ${image.name} ${idx + 1}`}
                    width={image.width}
                    height={image.height}
                    
                    />
                </BlurFade>
                ))}
            </div>
       
    </section>
  );
}
