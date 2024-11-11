"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const periodos = [
  { id: 1, nombre: 'Primera Generación', descripcion: 'Desde la creación de Adán y Eva, hasta el asesinato de Abel por Caín, y la historia humana antes del diluvio.', imagen: '/periodo_1.webp?height=500&width=480' },
  { id: 2, nombre: 'Noé y El Diluvio', descripcion: 'Desde el ministerio de Noé y el diluvio global, hasta Cush, Nimrod y la torre de Babel.', imagen: '/periodo_2.webp?height=500&width=480' },
  { id: 3, nombre: 'Los Patriarcas', descripcion: 'Desde el llamado de Abraham, hasta Sodoma y Gomorra, y el surgimiento de las 12 tribus judías a través de Isaac y Jacob.', imagen: '/periodo_3.webp?height=500&width=480' },
  { id: 4, nombre: 'De Egipto a Canaán', descripcion: 'Desde la venta de José como esclavo, su ascenso al poder en Egipto, hasta Moisés y el Éxodo.', imagen: '/periodo_4.webp?height=500&width=480' },
  { id: 5, nombre: 'Los Jueces', descripcion: 'Desde Moisés y los Diez Mandamientos hasta la entrada de Josué y la expansión judía en la Tierra Prometida.', imagen: '/periodo_5.webp?height=500&width=480' },
  { id: 6, nombre: 'Reino Unido', descripcion: 'Desde el rey Saúl hasta el profeta Samuel y el joven rey David y su dinastía real a través de Salomón.', imagen: '/periodo_6.webp?height=500&width=480' },
  { id: 7, nombre: 'Reino Dividido', descripcion: 'Desde los conflictos internos que dividieron la nación de Israel hasta los profetas que advirtieron sobre el exilio venidero.', imagen: '/periodo_7.webp?height=500&width=480' },
  { id: 8, nombre: 'El Exilio', descripcion: 'Desde la caída de Israel hasta el exilio en Babilonia y los grandes profetas declarando la venida del Mesías.', imagen: '/periodo_8.webp?height=500&width=480' },
  { id: 9, nombre: 'Vida de Cristo', descripcion: 'Desde el nacimiento del prometido Mesías, Jesús el Cristo, hasta su ministerio, muerte y resurrección.', imagen: '/periodo_9.webp?height=500&width=480' },
  { id: 10, nombre: 'Iglesia Primitiva', descripcion: 'Desde el martirio de Esteban hasta la persecución y el auge de la iglesia a través de Pablo y los apóstoles.', imagen: '/periodo_2.webp?height=500&width=480' },
  { id: 11, nombre: 'Edad Media', descripcion: 'Desde la legalización del cristianismo bajo Constantino hasta la persecución de la Edad Oscura.', imagen: '/periodo_2.webp?height=500&width=480' },
  { id: 12, nombre: 'La Reforma', descripcion: 'Desde los grandes reformadores, como Lutero y Wycliffe, hasta la expansión del movimiento protestante.', imagen: '/periodo_2.webp?height=500&width=480' },
  { id: 13, nombre: 'Profecías de Apocalipsis', descripcion: 'Desde el surgimiento del anticristo, la marca de la bestia, hasta el regreso de Cristo y la restauración del paraíso.', imagen: '/periodo_2.webp?height=500&width=480' }
];

export default function PeriodosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPeriodo, setSelectedPeriodo] = useState<number | null>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const openDialog = (periodoId: number) => {
    if (periodoId === 1) { // Solo abrir el diálogo si el periodoId es 1
      setSelectedPeriodo(periodoId);
      setDialogOpen(true);
    }
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedPeriodo(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Períodos Bíblicos</h2>
          <p className="text-xl text-gray-600">Un recorrido a través de la historia.</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => scroll("left")}
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200"
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Anterior</span>
          </Button>
          <Button
            onClick={() => scroll("right")}
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200"
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-visible snap-x snap-mandatory hide-scrollbar py-8 px-8"
        onScroll={checkScroll}
      >
        {periodos.map((periodo) => (
          <div key={periodo.id} className="flex-none w-[28.2352941176rem] snap-center">
            <div
              className="rf-ccard-content bg-white rounded-[18px] overflow-hidden shadow-md flex flex-col h-[29.4117647059rem] relative transition-transform duration-300 ease-[cubic-bezier(0,0,0.5,1)] hover:scale-105 hover:shadow-lg hover:z-10"
              onClick={() => openDialog(periodo.id)}
            >
              <div className="relative">
                <img
                  src={periodo.imagen}
                  alt={periodo.nombre}
                  className="w-full object-cover"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="p-6 flex flex-col gap-1">
                <h3 className="text-2xl font-semibold text-gray-900">{periodo.nombre}</h3>
                <p className="text-lg text-gray-600">{periodo.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Dialog open={dialogOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Gráfico Genealógico</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            {selectedPeriodo !== null && (
              <ChartComponent periodoId={selectedPeriodo} />
            )}
          </div>
        </DialogContent>
      </Dialog>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .rf-ccard-content {
          position: relative;
          z-index: 1;
        }
        .rf-ccard-content:hover {
          z-index: 10;
        }
      `}</style>
    </div>
  );
}

function ChartComponent({ periodoId }: { periodoId: number }) {
  const chartData = [
    { name: "Adan", birth: 0, ageWhenSonBorn: 130, lengthOfLife: 930, death: 930 },
    { name: "Set", birth: 130, ageWhenSonBorn: 105, lengthOfLife: 912, death: 1042 },
    { name: "Enos", birth: 235, ageWhenSonBorn: 90, lengthOfLife: 905, death: 1140 },
    { name: "Cainan", birth: 325, ageWhenSonBorn: 70, lengthOfLife: 910, death: 1235 },
    { name: "Mahalaleel", birth: 395, ageWhenSonBorn: 65, lengthOfLife: 895, death: 1290 },
    { name: "Jared", birth: 460, ageWhenSonBorn: 162, lengthOfLife: 962, death: 1422 },
    { name: "Enoc", birth: 622, ageWhenSonBorn: 65, lengthOfLife: 365, death: 987 },
    { name: "Matusalen", birth: 687, ageWhenSonBorn: 187, lengthOfLife: 969, death: 1656 },
    { name: "Lamec", birth: 874, ageWhenSonBorn: 182, lengthOfLife: 777, death: 1651 },
    { name: "Noe", birth: 1056, ageWhenSonBorn: 500, lengthOfLife: 950, death: 2006 },
  ];

  const chartConfig = {
    birth: {
      label: "Birth (AM)",
    },
    ageWhenSonBorn: {
      label: "Age when Son Born",
    },
    lengthOfLife: {
      label: "Duracion de Vida: ",
    },
    death: {
      label: "Death (AM)",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="name"
              type="category"
              interval={0}
              tickLine={false}
              axisLine={false}
            />
            <XAxis dataKey="lengthOfLife" type="number" hide={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="lengthOfLife" layout="vertical" radius={5} fill="hsl(var(--chart-1))" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      </CardFooter>
    </Card>
  );
}
