"use client"

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import CarouselItem from './CarouselItem'

interface Periodo {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const periodos: Periodo[] = [
  { id: 1, nombre: 'Primera Generación', descripcion: 'Desde la creación de Adán y Eva, hasta el asesinato de Abel por Caín, y la historia humana antes del diluvio.', imagen: '/periodo_1.webp' },
  { id: 2, nombre: 'Noé y El Diluvio', descripcion: 'Desde el ministerio de Noé y el diluvio global, hasta Cush, Nimrod y la torre de Babel.', imagen: '/periodo_2.webp' },
  { id: 3, nombre: 'Los Patriarcas', descripcion: 'Desde el llamado de Abraham, hasta Sodoma y Gomorra, y el surgimiento de las 12 tribus judías a través de Isaac y Jacob.', imagen: '/periodo_3.webp' },
  { id: 4, nombre: 'De Egipto a Canaán', descripcion: 'Desde la venta de José como esclavo, su ascenso al poder en Egipto, hasta Moisés y el Éxodo.', imagen: '/periodo_4.webp' },
  { id: 5, nombre: 'Los Jueces', descripcion: 'Desde Moisés y los Diez Mandamientos hasta la entrada de Josué y la expansión judía en la Tierra Prometida.', imagen: '/periodo_5.webp' },
  { id: 6, nombre: 'Reino Unido', descripcion: 'Desde el rey Saúl hasta el profeta Samuel y el joven rey David y su dinastía real a través de Salomón.', imagen: '/periodo_6.webp' },
  { id: 7, nombre: 'Reino Dividido', descripcion: 'Desde los conflictos internos que dividieron la nación de Israel hasta los profetas que advirtieron sobre el exilio venidero.', imagen: '/periodo_7.webp' },
  { id: 8, nombre: 'El Exilio', descripcion: 'Desde la caída de Israel hasta el exilio en Babilonia y los grandes profetas declarando la venida del Mesías.', imagen: '/periodo_8.webp' },
  { id: 9, nombre: 'Vida de Cristo', descripcion: 'Desde el nacimiento del prometido Mesías, Jesús el Cristo, hasta su ministerio, muerte y resurrección.', imagen: '/periodo_9.webp' },
  { id: 10, nombre: 'Iglesia Primitiva', descripcion: 'Desde el martirio de Esteban hasta la persecución y el auge de la iglesia a través de Pablo y los apóstoles.', imagen: '/periodo_10.webp' },
  { id: 11, nombre: 'Edad Media', descripcion: 'Desde la legalización del cristianismo bajo Constantino hasta la persecución de la Edad Oscura.', imagen: '/periodo_11.webp' },
  { id: 12, nombre: 'La Reforma', descripcion: 'Desde los grandes reformadores, como Lutero y Wycliffe, hasta la expansión del movimiento protestante.', imagen: '/periodo_12.webp' },
  { id: 13, nombre: 'Profecías de Apocalipsis', descripcion: 'Desde el surgimiento del anticristo, la marca de la bestia, hasta el regreso de Cristo y la restauración del paraíso.', imagen: '/periodo_13.webp' }
];

export default function PeriodosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }, [])

  useEffect(() => {
    checkScroll()
  }, [checkScroll])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      requestAnimationFrame(checkScroll)
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Períodos Bíblicos</h2>
          <p className="text-xl text-gray-600">Un recorrido a través de la historia.</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => scroll('left')}
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200"
            disabled={!canScrollLeft}
            aria-controls="periodos-carousel"
            aria-label="Desplazar hacia la izquierda"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Anterior</span>
          </Button>
          <Button
            onClick={() => scroll('right')}
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200"
            disabled={!canScrollRight}
            aria-controls="periodos-carousel"
            aria-label="Desplazar hacia la derecha"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-8 px-8"
        onScroll={checkScroll}
        id="periodos-carousel"
        aria-live="polite"
      >
        {periodos.map((periodo) => (
          <CarouselItem key={periodo.id} periodo={periodo} />
        ))}
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
