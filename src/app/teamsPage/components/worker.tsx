import Image from "next/image"

interface IProps {
    name: {
        first: string
        last: string
    }
    picture:{
        large: string
    }
    email: string
}

export default async function Teams() {
        const res = await fetch("https://randomuser.me/api/?inc=name,email,picture,id&noinfo&nat=GE&results=12")
        const data = await res.json()
            


    const titles: string [] = [
        "Chief of the External Affairs", "Managing Director", "Chief Executive Officer", "Outside Advisor", "Chief Executive Officer",
        "Chief Financial Officer", "Former President", "Chief Growth Officer", "Chief Executive Officer & Director", 
        "Chief Revenue Officer", "Licensing & Entertainment"
    ]

    return (
        <div>
            {data.results.map((item : IProps, idx : number) => (
                <div className="inline-flex py-10 pl-16" key={item.email}>
                    <div className="card card-compact bg-white  w-[280px] shadow-xl">
                        <figure>
                            <Image src={item.picture.large} width={280} height={280} alt="our teams"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name.first} {item.name.last}</h2>
                            <p>{titles[idx]}</p>
                            <p>{item.email}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}