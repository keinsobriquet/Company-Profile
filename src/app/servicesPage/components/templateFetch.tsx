import Image from "next/image";

interface IProps { image: string; title: string; caption: string; }

export default function TemplateFetch({ image, title, caption }: IProps) {
    return (
        <div className="card card-compact flex bg-white w-80 hover:shadow-xl hover:scale-105 duration-300 shadow-md">
            <figure>
                <Image src={`https:${image}`} width={300} height={300} alt=""/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-balance">{caption}</p>
            </div>
        </div>
    )
}