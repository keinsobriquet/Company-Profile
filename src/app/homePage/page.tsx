import Image from "next/image"
import Link from "next/link"
import TestimonyBrief from "./components/testimonyBrief"
import MarqueeProducts from "@/components/marqueeProducts"
import Leaders from "./components/teamsBrief"


export default function HomePage() {
  return (
    <div className="bg-white py-5 pb-40 px-5 lg:px-16">
      <div className="flex justify-center items-center pt-0">
        <Image src="/toy-stars-hd-bgless.jpg" width="500" height="500" alt="toy stars home profile company logo" />
      </div>
      <h3 className="text-center text-xl">Welcome to Toy Stars, where joy knows no bounds!
        Explore our vast collection of toys from top brands, perfect for boys and girls of all ages.
      </h3>
      <h3 className="text-center text-xl">
        Discover the magic of play with our handpicked selection that guarantees smiles and endless fun.
      </h3>
      <h3 className="text-center text-xl pt-10">Let every visit be an adventure — shop now and bring home the joy!</h3>
      <h1 className="text-center text-5xl font-bold pt-24 text-sky-800">SPECIAL OFFER</h1>
      <div className="flex-row lg:flex justify-center mt-24 gap-24">
        <Image src="/specialoffer1.jpg" width="500" height="500" alt="toy stars discount item micro moped" />
        <Image src="/specialoffer2.jpg" width="500" height="500" alt="toy stars discount item bandai gunpla" />
      </div>
      <h1 className="text-center pt-16 text-2xl ">Take a look at our products below!</h1>
      <MarqueeProducts />
      <h1 className="text-center text-2xl">Learn more about available products at our store</h1>
      <div className="text-center pt-5">
        <Link href="/servicesPage"><button type="button" className="border-solid rounded-lg bg-sky-800 text-white px-5 py-2 hover hover:scale-125 duration-300">Available Products</button></Link>
      </div>
      <h1 className="text-center pt-32 text-4xl font-bold text-sky-800 ">Happy customers shared their experiences with us!</h1>
      <TestimonyBrief />
      <div className="text-center">
        <Link href="/servicesPage#testimonyfull"><button type="button" className="border-solid rounded-lg bg-sky-800 text-white px-5 py-2 hover hover:scale-125 duration-300">Testimonials</button></Link>
      </div>
      <div className="py-8 pt-36 text-center text-4xl font-bold text-sky-800">
        <h1>
          OUR LEADERSHIP
        </h1>
      </div>
      <h1 className="text-xl text-center pt-11">
      Our company leaders are visionary maestros, orchestrating a symphony of innovation and joy, 
      inspiring every team member to reach for the stars and craft magical experiences for children everywhere.
      </h1>
      <div className="flex flex-wrap gap-7 p-7 pt-10 justify-center">
        <Leaders image="/leader-man.jpg" name="Adam Steinkopf" title="Chairman, and a husband." />
        <Leaders image="/leader-woman.jpg" name="Katja Benningsfeld" title="Vice Chairwoman, and a wife"/>
      </div>
      <div className="text-center pt-5">
        <Link href="/teamsPage"><button type="button" className="border-solid rounded-lg bg-sky-800 text-white px-5 py-2 hover hover:scale-125 duration-300">Our Leadership</button></Link>
      </div>
      <div className="py-8 pt-36 text-center text-4xl font-bold text-sky-800">
        <h1>
          OUR COMPANY
        </h1>
      </div>
      <h1 className="text-xl text-center pt-11">
        Our values revolve around fostering curiosity, embracing diversity, and igniting the spark of wonder in every child&apos;s eyes.
        Working here means joining a vibrant community where ideas flourish, dreams are encouraged, and every day is a new adventure in the magical world of toys.
      </h1>
      <div className="py-16 flex lg:flex-row flex-col justify-center gap-5 lg:gap-14">
        <Image src="/our-mission.jpg" width="500" height="100" alt="toy stars company mission value" />
        <Image src="/our-purpose.jpg" width="500" height="100" alt="toy stars company purpose value" />
      </div>
      <div className="text-center">
        <Link href="/aboutUsPage"><button type="button" className="border-solid rounded-lg bg-sky-800 text-white px-5 py-2 hover hover:scale-125 duration-300">Learn More</button></Link>
      </div>
    </div>

  )
}