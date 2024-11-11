import periodosData from '@/lib/periodos.json';
import PeriodoContent from './PeriodoContent';

export async function generateStaticParams ()
{
    return Object.keys( periodosData.Periodos ).map( ( nombre ) => ( { nombre } as const ) );
}

export default function PeriodoPage ( { params }: { params: { nombre: string } } )
{
    const nombre = params?.nombre;

    if ( !nombre || typeof nombre !== 'string' )
    {
        return <p>Error: Parámetro inválido</p>;
    }

    return <PeriodoContent nombre={ nombre } />;
}
