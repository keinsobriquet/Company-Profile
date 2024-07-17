import Image from "next/image"
import Link from "next/link"
import Sidebar from "./sidebar"

export default function Navbar() {
    return (
        <div className="flex justify-between bg-white sticky z-10 top-0 h-[60px]">
            <Image src="/stars.jpg" width={200} height={100} alt="toy stars logo navbar" />
            <div className="lg:flex gap-9 text-sky-800 h-16 mr-10 pt-5 hidden">
                <Link href="/" className="hover hover:scale-125 duration-300"><button>Home</button></Link>
                <Link href="/aboutUsPage" className="hover hover:scale-125 duration-300"><button>About Us</button></Link>
                <Link href="/servicesPage" className="hover hover:scale-125 duration-300"><button>Products</button></Link>
                <Link href="/teamsPage" className="hover hover:scale-125 duration-300"><button>Teams</button></Link>
            </div>
            <div className="md:hidden">
                <Sidebar/>
            </div>
        </div>
    )
}