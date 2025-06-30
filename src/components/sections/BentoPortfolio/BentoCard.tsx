'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface BentoCardProps {
  item: {
    id: number;
    title: string;
    category: string;
    image: string;
    size: string;
    description: string;
    color: string;
    textColor: string;
  };
  index: number;
  className?: string;
}

const BentoCard = ({ item, index, className }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    
    gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 0.6,
      ease: 'power2.out',
    });

    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(cardRef.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeaveRotation = () => {
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`bento-item bento-${item.size} ${className} cursor-pointer group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        handleMouseLeave();
        handleMouseLeaveRotation();
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {/* Image */}
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Overlay */}
        <div
          ref={overlayRef}
          className={`absolute inset-0 ${item.color} opacity-0 transition-opacity duration-300`}
        />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className={`${item.textColor} transition-all duration-300 ${isHovered ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-70'}`}>
            <p className="text-caption opacity-80 mb-2">{item.category}</p>
            <h3 className="futura-bold text-heading mb-3">{item.title}</h3>
            <p className={`text-body transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              {item.description}
            </p>
          </div>
        </div>

        {/* Liquid glass effect */}
        <div className="absolute inset-0 glass-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow" />
      </div>
    </div>
  );
};

export default BentoCard;