"use client"

import Image from "next/image";
interface IProps { image: string; name: string; title: string }

export default function Leaders({ image, name, title }: IProps) {
    return (
        <div className="card card-compact bg-white shadow-md">
            <figure>
                <Image src={image} width={500} height={500} alt="leader" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-balance">{title}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}

