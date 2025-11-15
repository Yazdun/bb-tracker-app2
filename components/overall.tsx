import { data } from "./data";
import { Progress } from "./ui/progress";
import { formatUSD } from "../lib/utils";

export function Overall() {
  const totalDays = 90;
  const daysPassed = data.filter((i) => i.date).length;
  const daysRemaining = totalDays - daysPassed;

  const totalBountiesEarned = data.reduce(
    (acc, item) => (item?.date ? acc + item.bountiesEarned : acc),
    0,
  );

  return (
    <div className="p-5 border space-y-2.5">
      <div className="flex items-center justify-between">
        <div>
          Days Remaining: {daysRemaining} / {totalDays}
        </div>
        <div>Bounty Goal: {formatUSD(totalBountiesEarned)} / $10k USD</div>
      </div>

      <Progress value={100 - (daysRemaining / totalDays) * 100} />
    </div>
  );
}
