const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white/60 rounded-2xl p-6 h-28 shadow">
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-3" />
      <div className="h-8 bg-gray-300 rounded w-1/3" />
    </div>
  );
};

export default SkeletonCard;
