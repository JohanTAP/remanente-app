import periodosData from '@/lib/periodos.json';
import PeriodoContent from '@/app/Periodo/[nombre]/PeriodoContent';

export async function generateStaticParams ()
{
    return Object.keys( periodosData.Periodos ).map( ( nombre ) => ( { nombre } ) );
}

export default function PeriodoPage ( { params }: { params: { nombre: string } } )
{
    return <PeriodoContent nombre={ params.nombre } />;
}
