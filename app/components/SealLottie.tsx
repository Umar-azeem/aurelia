'use client';
import Lottie from 'lottie-react';
import animationData from '@/public/animations/notary-seal.json';

export default function SealLottie() {
  return (
    <div className="lottie-frame">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}