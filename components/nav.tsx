import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "./ui/scroll-area";

export function Navbar() {
  return (
    <nav className="px-5 py-2 flex items-center justify-between w-full max-w-5xl mx-auto">
      <span>💰 90d Bounty tracker</span>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">What is this??</Button>
        </DialogTrigger>
        <DialogContent className="p-0 md:max-w-5xl">
          <ScrollArea className="md:h-[600px] h-[calc(100vh-100px)]">
            <DialogHeader className="px-5 py-3 flex items-center justify-center flex-col text-center">
              <DialogTitle>What is this??</DialogTitle>
              <DialogDescription>
                Written on November 15, 2025
              </DialogDescription>
            </DialogHeader>
            <hr />
            <div className="space-y-4 p-5">
              <p>
                Since June, I&apos;ve started taking cybersecurity a bit more
                seriously.
              </p>

              <p>
                At the same time, I was in the worst shape of my life, both
                mentally and physically.
              </p>

              <p>
                Hunting isn&apos;t new to me. I&apos;ve found vulnerabilities
                here and there, done pentesting at work & collected some
                bounties over the years.
              </p>

              <p>Still, I’m an amateur.</p>

              <p>
                See, I had a failed startup on my hand and I only realized how
                tight that product was tied to my ego short after I let it go.
              </p>

              <p>
                I commonly had panic attacks and anxiety attacks, my brain was
                covered in a thick dark fog.
              </p>

              <p>
                Actually, this was my second attempt to build something great,
                which blew up in my face again.
              </p>

              <p>
                I&apos;m grateful to God for having my partner during that time,
                as she saved me from being fully consumed by dark evil of
                resentment.
              </p>

              <p>
                Since June, while I was mostly listening to podcasts, playing
                chess, and watching anime, I also started casually reading
                vulnerability reports, reading a few books on networking and
                Linux, doing CTFs, and exploring public H1 programs.
              </p>

              <p>
                I was mainly trying to keep myself busy and wasn&apos;t serious
                about it, but I ended up greatly improving my basic
                understanding of the web and programming.
              </p>

              <p>
                During August and September, I picked up a few H1 programs and
                started doing recon. I found some vulnerabilities, got a few
                duplicates & only one was triaged for a few hundred bucks.
              </p>

              <p>Still, I was mainly doing this for fun…</p>

              <p>
                I&apos;ve been searching for all sorts of stuff without any
                methodology.
              </p>

              <p>XSS, CSRF, SSRF, RCEs, IDORs, you name it.</p>

              <p>
                Jumping from one program to another and doing as many CTFs as I
                can.
              </p>

              <p>
                It was also very hard for me to stay consistent because I had
                anxiety attacks that would freeze me.
              </p>

              <p>
                I would end up staring at my laptop screen for hours or just
                getting back into bed.
              </p>

              <p>
                But gradually anxiety attacks went away, I started working out &
                feeling better.
              </p>

              <p>
                In October, I began running out of money and needed to look at
                the job market.
              </p>

              <p>I applied for 4 positions…</p>

              <p>Got 3 interviews…</p>

              <p>And received 3 job offers!</p>

              <p>Interesting, definitely a sign that my brain’s worki</p>

              <p>
                Although I&apos;m still doing web development, as of today,
                I&apos;ve been involved in cybersecurity & bug bounty for almost
                four months in one way or another.
              </p>

              <p>
                I think I&apos;ve had enough of just playing around, so
                I&apos;ve decided to take this seriously and really challenge
                myself.
              </p>

              <p>
                I’m giving myself 90 days to earn total of $10k in bounties and
                I’ll document my journey here.
              </p>

              <p>
                I&apos;m going to fully focus on XSS. I&apos;ll only do narrow
                recon and ignore all other types of vulnerabilities.
              </p>

              <p>I will no longer do CTFs.</p>

              <p>
                I’m going to avoid tutorials and educational content, and I’ll
                focus on learning by doing.
              </p>

              <p>
                I’m going to do most of my recon manually so I can start
                developing my own methodology by the end of 90 days.
              </p>

              <p>
                I have a good feeling about this. I&apos;m also aware that I
                might not hit my target, but I&apos;ll do everything I possibly
                can to learn and grow during this time period.
              </p>

              <p>
                I&apos;ll set up a website to track my daily progress so I’ll
                have a clear image by the time I reach the end of these 90 days.
              </p>

              <p>Let&apos;s see how it goes!</p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
