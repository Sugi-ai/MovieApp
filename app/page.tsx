import { Homepage, HomePageSkeleton } from "@/components/main";
import { Suspense } from "react";

export default function Home() {
  return (
  <Suspense fallback={<HomePageSkeleton/>}>
    <Homepage />
  </Suspense>
  )
}
