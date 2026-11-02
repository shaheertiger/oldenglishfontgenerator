import PageView, { pageMetadata } from "@/components/PageView";
import home from "@/content/pages/home";

export const metadata = pageMetadata(home);

export default function Home() {
  return <PageView page={home} home />;
}
