import Image from "next/image"
import Leaders from "../homePage/components/teamsBrief"
import Link from "next/link"

export default function AboutUs() {
    return (
        <div className="bg-white text-center py-10 pb-40 px-16">
            <div className="flex justify-center items-center">
                <Image src="/stars.jpg" width={200} height={100} alt="toy stars logo icon" />
            </div>
            <div className="">
                <div className=" text-4xl font-bold text-sky-800">
                    <h1>
                        OUR HISTORY
                    </h1>
                </div>
                <h1 className="text-xl pt-11">
                    Founded in 1995, Toy Stars began as a small family-owned shop with a simple mission: to spark joy and creativity in every child.
                    Inspired by our founders&apos; own childhood memories, we sought to create a place where magic and imagination come to life through the power of play.
                    With a deep passion for quality and an eye for the extraordinary, we quickly grew from a humble storefront to a beloved destination for toy enthusiasts of all ages.
                </h1>
                <div className="py-16 flex lg:flex-row flex-col justify-center gap-5 lg:gap-14">
                    <Image src="/vintage-toy-shop6.jpg" width="500" height="100" alt="the old toy stars" />
                    <Image src="/vintage-toy-shop5.jpg" width="500" height="100" alt="the old toy stars" />
                </div>
                <h1 className="text-xl">
                    Over the years, Toy Stars has celebrated numerous milestones, each marking a new chapter in our journey.
                    From partnering with renowned toy brands to introducing exclusive collections, we have continuously expanded our offerings to ensure a diverse and exciting selection.
                    Our commitment to excellence and our dedication to customer satisfaction have earned us a loyal following, making Toy Stars a trusted name in the industry.
                    <div className="py-16 flex lg:flex-row flex-col justify-center gap-5 lg:gap-14">
                        <Image src="/vintage-toy-shop3.jpg" width="500" height="100" alt="the old toy stars store" />
                        <Image src="/vintage-toy-shop2.jpg" width="500" height="100" alt="the old toy stars store" />
                    </div>
                </h1>
                <h1 className="text-xl">
                    Today, we are proud to operate multiple locations nationwide, bringing joy to countless families and children.
                    As we continue to grow, our core values remain unchanged: providing high-quality toys, fostering imagination, and creating unforgettable experiences.
                    At Toy Stars, we believe that every toy has a story, and we are honored to be a part of yours.
                </h1>
                <div className="py-16 flex lg:flex-row flex-col justify-center gap-5 lg:gap-14">
                    <Image src="/new-toy-shop3.jpg" width="500" height="100" alt="the new toy stars store" />
                    <Image src="/new-toy-shop-1.jpg" width="500" height="100" alt="the new toy stars store" />
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
                    <Leaders image="/leader-woman.jpg" name="Katja Benningsfeld" title="Vice Chairwoman, and a wife" />
                </div>
                <div className="text-center pt-5">
                    <Link href="/teamsPage"><button type="button" className="border-solid rounded-lg bg-sky-800 text-white px-5 py-2 hover hover:scale-125 duration-300">Our Teams</button></Link>
                </div>
                <div className="py-8 pt-28 text-4xl font-bold text-sky-800">
                    <h1>
                        OUR CULTURE
                    </h1>
                </div>
                <h1 className="text-xl pt-11">
                    Our values revolve around fostering curiosity, embracing diversity, and igniting the spark of wonder in every child&apos;s eyes.
                    Working here means joining a vibrant community where ideas flourish, dreams are encouraged, and every day is a new adventure in the magical world of toys.
                </h1>
                <div className="py-16 flex lg:flex-row flex-col justify-center gap-5 lg:gap-14">
                    <Image src="/our-mission.jpg" width="500" height="100" alt="toy stars mission" />
                    <Image src="/our-purpose.jpg" width="500" height="100" alt="toy stars purpose" />
                </div>
                <h1 className="text-xl">
                    At our toy store, the air is filled with the joyful symphony of laughter and creativity, where imagination knows no bounds.
                    We believe in nurturing a culture of playfulness, collaboration, and innovation, ensuring that every team member feels like a cherished part of our family.
                </h1>
                <div className="py-16 flex lg:flex-row flex-col justify-center gap-5 lg:gap-14">
                    <Image src="/vision1.jpg" width="500" height="100" alt="toy stars company work working atmosphere" />
                    <Image src="/vision2.jpg" width="500" height="100" alt="toy stars company work atmosphere at the store" />
                    
                </div>
                <div className="flex lg:flex-row flex-col justify-center gap-5 lg:gap-14">
                    <Image src="/vision3.jpg" width="500" height="100" alt="toy stars company work atmosphere with the children" />
                    <Image src="/vision5.jpg" width="500" height="100" alt="toy stars company work atmosphere at working hours" />
                </div>
            </div>
        </div>
    )
}