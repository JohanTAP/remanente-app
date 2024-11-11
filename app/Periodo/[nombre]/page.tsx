import periodosData from '@/lib/periodos.json';
import PeriodoContent from './PeriodoContent';

interface PeriodoPageProps
{
    params: { nombre: string };
}

export async function generateStaticParams ()
{
    return Object.keys( periodosData.Periodos ).map( ( nombre ) => ( { nombre } as const ) );
}

export default function PeriodoPage ( { params }: PeriodoPageProps )
{
    const nombre = params.nombre;

    return <PeriodoContent nombre={ nombre } />;
}
