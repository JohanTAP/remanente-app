import periodosData from '@/lib/periodos.json';
import PeriodoContent from './PeriodoContent';

type PeriodoPageProps = {
    params: { nombre: string };
};

export async function generateStaticParams() {
    return Object.keys(periodosData.Periodos).map((nombre) => ({ nombre } as const));
}

export default async function PeriodoPage({ params }: PeriodoPageProps) {
    const nombre = await params.nombre;

    return <PeriodoContent nombre={nombre} />;
}
