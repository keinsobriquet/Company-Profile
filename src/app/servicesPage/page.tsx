import Testimony from "@/components/testimony";
import Image from "next/image";
import ProductsFetch from "./components/productsFetch";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Toy Stars",
    description: "Products"
  };

export default function ServicesPage() {
    return(
        <div className="bg-white pb-32">
            <div className="flex pt-10 justify-center items-center">
                <Image src={"/stars.jpg"} width={200} height={100} alt="toy stars logo icon"/>
            </div>
            <div className=" justify-center items-center text-center">
                <h1 className="font-semibold text-2xl text-sky-800">
                Take a look at our collections from various well-known brand all over the world!
                </h1>
            </div>
            <ProductsFetch/>
            <div id="testimonyfull" className="">
                <Testimony/>
            </div>
        </div>
    )
}