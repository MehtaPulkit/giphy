import React from 'react';
import Skeleton from "./Skeleton";

interface SkeletonLoaderProps {
  size?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ size = 12 }) => {
  return (
    <div className="flex flex-wrap flex-row gap-2">
      {Array.from({ length: size }).map((_, id) => (
        <Skeleton key={id} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
