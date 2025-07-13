import CardList from "@/components/Homepage/CardList/CardList";
import CategoryList from "@/components/Homepage/CategoryList/CategoryList";
import Featured from "@/components/Homepage/Featured/Featured";
import Menu from "@/components/Homepage/Menu/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:p-4">
      <Featured />
      <CategoryList />
      <div className="xl:flex gap-12 mt-10">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
