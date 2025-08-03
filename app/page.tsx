import CardList from "@/components/Homepage/CardList/CardList";
import CategoryList from "@/components/Homepage/CategoryList/CategoryList";
import Featured from "@/components/Homepage/Featured/Featured";
import Menu from "@/components/Homepage/Menu/Menu";

export default function Home({ searchParams }: { searchParams: any }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    // Added a bit more vertical padding on mobile
    <div className="max-w-screen-2xl mx-auto px-4 lg:p-8">
      <Featured />
      <CategoryList />
      {/* Changed to lg:flex for earlier breakpoint and added a larger gap */}
      <div className="lg:flex gap-16 mt-12">
        {/* Defined explicit widths for better control */}
        <div className="lg:w-2/3">
          <CardList page={page} />
        </div>
        <div className="lg:w-1/3">
          <Menu />
        </div>
      </div>
    </div>
  );
}
