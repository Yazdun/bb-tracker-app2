import { data } from "@/components/data";
import { DetailsDialog } from "@/components/details-dialog";
import { Navbar } from "@/components/nav";
import { Overall } from "@/components/overall";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="w-full max-w-5xl pt-2.5 flex flex-col gap-5 p-5 m-auto">
        <Overall />
        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-5">
          {data.map((item, idx) => {
            return <DetailsDialog idx={idx} key={idx} data={item} />;
          })}
        </ul>
      </main>
    </div>
  );
}
