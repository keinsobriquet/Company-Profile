import { Metadata } from "next";
import Leaders from "../homePage/components/teamsBrief";
import Teams from "./components/worker";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Toy Stars",
  description: "Teams"
};


export default function TeamsPage() {
  return (
    <div className="bg-white pb-24">
      <div className="flex pt-10 justify-center items-center">
        <Image src="/stars.jpg" width={200} height={100} alt="toy stars logo icon" />
      </div>
      <div className=" justify-center items-center text-center">
        <h1 className="font-bold text-4xl text-sky-800">
          BOARD OF DIRECTORS
        </h1>
      </div>
      <h1 className="text-xl pt-11 px-5 lg:px-16 text-center">
        Our company leaders are visionary maestros, orchestrating a symphony of innovation and joy,
        inspiring every team member to reach for the stars and craft magical experiences for children everywhere.
      </h1>
      <div className="flex flex-wrap gap-7 p-7 pt-16 justify-center">
        <Leaders image="/leader-man.jpg" name="Adam Steinkopf" title="Chairman, and a husband." />
        <Leaders image="/leader-woman.jpg" name="Katja Benningsfeld" title="Vice Chairwoman, and a wife" />
      </div>
      <div className="">
        <h1 className="text-xl pt-11 px-5 lg:px-16 text-center">
          Our company teams are like a constellation of vibrant stars, each one shining brightly with unique talents and boundless enthusiasm.
          From the dream-weavers in design who bring fantastical ideas to life, to the meticulous magicians in production who ensure every toy is crafted to perfection, every team plays a crucial role in our enchanting journey.
          Our customer care champions sprinkle joy and provide unparalleled support, while our marketing mavens weave captivating stories that connect with hearts of all ages.
          Together, we form a dynamic ensemble, united by a shared passion for bringing smiles and fostering endless imagination.
        </h1>
      </div>
      <div className="pt-11">
        <Teams />
      </div>
    </div>
  )
}