import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";
import img7 from "./assets/images/7.jpg";
import img8 from "./assets/images/8.jpg";
import img9 from "./assets/images/9.jpg";
import img10 from "./assets/images/10.jpg";
import img11 from "./assets/images/11.jpg";
import img12 from "./assets/images/12.jpg";
import img13 from "./assets/images/13.jpg";
import img14 from "./assets/images/14.jpg";
import img15 from "./assets/images/15.jpg";
import img16 from "./assets/images/16.jpg";
import img17 from "./assets/images/17.jpg";
import img1 from "./assets/images/100.jpg";
import { ScrollArea } from "./components/ui/scroll-area";
import { AtSign, Linkedin, PhoneOutgoing } from "lucide-react";
 type DataImg = {
    image: string;
}[]
function App() {
  const imageDataArray: DataImg = [
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
    {
      image: img8,
    },
    {
      image: img9,
    },
    {
      image: img10,
    },
    {
      image: img11,
    },
    {
      image: img12,
    },
    {
      image: img13,
    },
    {
      image: img14,
    },
    {
      image: img15,
    },
    {
      image: img16,
    },
    {
      image: img17,
    },
    {
      image: img1,
    },
  ];
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-between flex-col h-[100svh]">
        <header className="max-h-[20svh] overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between p-5 gap-2.5">
            <div className="flex flex-col md:gap-2 justify-center items-center md:justify-start md:items-start">
                <h1 className="flex text-lg lg:text-5xl uppercase font-extrabold text-center md:text-left">
                  Oleksandr Dzisiak
                </h1>
              <p className="text-xs md:text-base text-muted-foreground">
                Portfolio os SketchUp PV visualizations
              </p>
            </div>

            <nav className="flex flex-col gap-3 justify-center items-center">
              <h2 className="hidden lg:block text-5xl uppercase font-extrabold">
                Contacts
              </h2>
              <div className="flex gap-2 text-xs">
                <a className="text-xs" href="tel:+48735145620">
                  <Button variant="outline">
                    <PhoneOutgoing className="w-5 h-5" />
                  </Button>
                </a>
                <a href="mailto:oleksandr.dzisiak+pv@gmail.com">
                  <Button className="text-xs" size="icon" variant="outline">
                    <AtSign className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/od-/">
                  <Button className="text-xs" variant="outline">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
                <ModeToggle />
              </div>
            </nav>
          </div>

          <Separator className="my-5" />
        </header>
        <main className="flex justify-center items-center">
          <ScrollArea className="rounded-none h-[70svh] max-w-[100svw] overflow-hidden lg:px-5 px-1">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {imageDataArray.map(({ image }, index) => (
                <article
                  key={index}
                  className="bg-card border-2 flex flex-col rounded-lg p-5 lg:last:col-span-4"
                >
                  <img
                    className="w-full h-full bg-cover rounded-md"
                    src={image}
                    alt="image ov pv"
                  />
                </article>
              ))}
            </div>
          </ScrollArea>
        </main>
        <footer className="flex flex-col justify-end items-center pb-5 max-h-[10svh] ">
          <Separator className="my-5" />
          <p className="text-muted-foreground text-center text-xs md:text-base">
            Made for show my visualization work in SketchUp
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
