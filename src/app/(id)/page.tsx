import { HomePage } from "@/components/HomePage";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("id");

export default function Page() {
  return <HomePage locale="id" />;
}
