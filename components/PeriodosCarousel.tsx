"use client"

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import CarouselItem from './CarouselItem'
import eventosData from '../lib/periodos.json'

const periodos = Object.values( eventosData.Periodos ).map( ( periodo, index ) => ( {
  id: index + 1,
  nombre: periodo.nombre,
  descripcion: periodo.descripcion,
  imagen: periodo.imagen
} ) );

export default function PeriodosCarousel ()
{
  const scrollRef = useRef<HTMLDivElement>( null )
  const [ canScrollLeft, setCanScrollLeft ] = useState( false )
  const [ canScrollRight, setCanScrollRight ] = useState( true )

  const checkScroll = useCallback( () =>
  {
    if ( scrollRef.current )
    {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft( scrollLeft > 0 )
      setCanScrollRight( scrollLeft < scrollWidth - clientWidth - 1 )
    }
  }, [] )

  useEffect( () =>
  {
    checkScroll()
  }, [ checkScroll ] )

  const scroll = ( direction: 'left' | 'right' ) =>
  {
    if ( scrollRef.current )
    {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy( { left: scrollAmount, behavior: 'smooth' } )
      requestAnimationFrame( checkScroll )
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
            onClick={ () => scroll( 'left' ) }
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200"
            disabled={ !canScrollLeft }
            aria-controls="periodos-carousel"
            aria-label="Desplazar hacia la izquierda"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Anterior</span>
          </Button>
          <Button
            onClick={ () => scroll( 'right' ) }
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200"
            disabled={ !canScrollRight }
            aria-controls="periodos-carousel"
            aria-label="Desplazar hacia la derecha"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>
      </div>
      <div
        ref={ scrollRef }
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-8 px-8"
        onScroll={ checkScroll }
        id="periodos-carousel"
        aria-live="polite"
      >
        { periodos.map( ( periodo ) => (
          <CarouselItem key={ periodo.id } periodo={ periodo } />
        ) ) }
      </div>
      <style jsx global>{ `
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
