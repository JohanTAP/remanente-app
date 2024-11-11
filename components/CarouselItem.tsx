"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Periodo
{
    key: string;
    nombre: string;
    descripcion: string;
    imagen: string;
}

interface CarouselItemProps
{
    periodo: Periodo;
}

const CarouselItem: React.FC<CarouselItemProps> = ( { periodo } ) => (
    <Link href={ `/Periodo/${ periodo.key }` } passHref>
        <div className="flex-none w-[29rem] h-[34rem] snap-center mx-4 cursor-pointer">
            <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col transition-transform duration-300 ease-&lsqb;cubic-bezier(0,0,0.5,1)&rsqb; hover:scale-105 hover:shadow-lg h-full">
                <div className="relative w-full h-[60%]">
                    <Image
                        src={ periodo.imagen }
                        alt={ periodo.nombre }
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        style={ { objectFit: 'cover' } }
                        quality={ 75 }
                        className="rounded-t-xl"
                    />
                </div>
                <div className="p-6 flex flex-col gap-1 h-[40%]">
                    <h3 className="text-2xl font-semibold text-gray-900">{ periodo.nombre }</h3>
                    <p className="text-lg text-gray-600 line-clamp-4 overflow-hidden">{ periodo.descripcion }</p>
                </div>
            </div>
        </div>
    </Link>
);

export default CarouselItem;
