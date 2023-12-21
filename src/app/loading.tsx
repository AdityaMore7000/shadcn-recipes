import SkeletonCard from "@/components/SkeletonCard";

export default function loading() {
  return (
    <div className="grid grid-cols-3 gap-8">
        {'000000000'.split('').map(i=>(
            <SkeletonCard key={i}/>
        ))}
    </div>
  )
}
