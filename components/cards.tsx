import { Card } from "./ui/card";

export function Cards() {
  return (
    <div className="p-5">
      {Array.from({ length: 90 }, (_, index) => {
        return <Card key={index}>Day {index + 1}</Card>;
      })}
    </div>
  );
}
