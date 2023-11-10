import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-[#817d7d34]", className)}
      {...props}
    />
  )
}

export { Skeleton }
