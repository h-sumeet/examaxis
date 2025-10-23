export interface StatProps {
  label: string;
}

export interface StatsSectionProps {
  stats: StatProps[];
}
const trustIndicators = [
  { label: "1000+ Questions" },
  { label: "Daily Updates" },
  { label: "Expert Verified" },
] 

export const indicators: StatsSectionProps = {
  stats: trustIndicators,
}