import { Key } from "lucide-react"
import { Skeleton } from "../ui/skeleton"

export const HomePageSkeleton = () => {
    return (
        <div>
            <Skeleton className="w-screen h-[600px]" />

            <div className="flex gap-3 mt-8 flex-wrap">
                {Array.from({ length: 10 }).map((_, i) => (<Skeleton key={i} className="w-[230px] h-[440px]"/>))}
            </div>
        </div>
    )
}