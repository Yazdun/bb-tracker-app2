import { data } from "@/components/data";
import { DetailsDialog } from "@/components/details-dialog";
import { Navbar } from "@/components/nav";

export default function Home() {
  return (
    <div className="">
      <main>
        <Navbar />
        <ul className="grid gap-2 md:grid-cols-2 m-auto lg:grid-cols-4 pt-2.5 p-5 w-full max-w-5xl">
          {data.map((item, idx) => {
            return <DetailsDialog idx={idx} key={idx} data={item} />;
          })}
        </ul>
      </main>
    </div>
  );
}
