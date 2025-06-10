import { categories } from "@/app/components/general/categorytranslate";
import { CategorySlug } from "@/app/components/general/categorytranslate";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: CategorySlug }>;
}) {
  const { slug } = await params;

  return <div></div>;
}
