import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TData } from "./data";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import dayjs from "dayjs";
import { formatUSD } from "@/lib/utils";

export function DetailsDialog({ data, idx }: { data: TData; idx: number }) {
  const isDisabled = data.component ? false : true;
  const timeSpent = data.timeSpent ?? 0;

  const renderContent = () => {
    if (data.component) {
      return (
        <DialogContent className="p-0 md:max-w-5xl">
          <ScrollArea className="md:h-[600px] p-5 h-[calc(100vh-100px)]">
            <DialogHeader className="gap-2 flex-row flex items-start justify-start text-center">
              <DialogTitle>
                Day {idx + 1}{" "}
                <span className="text-muted-foreground font-light">
                  / {dayjs(data.date).format("MMMM DD, YYYY")}
                </span>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-5">
              <div>
                <div>⌛ Time Spent: {(timeSpent / 60).toFixed(2)} hours</div>
                <span>
                  💰 Money Earned: {formatUSD(data.bountiesEarned ?? 0)}
                </span>
              </div>

              <hr className="my-5" />

              {data.component}
            </div>
          </ScrollArea>
        </DialogContent>
      );
    }

    return null;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={isDisabled} className="w-full" variant="outline">
          Day {idx + 1}
        </Button>
      </DialogTrigger>
      {renderContent()}
    </Dialog>
  );
}
