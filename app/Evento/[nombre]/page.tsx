import periodosData from '@/lib/periodos.json';

interface Escritura
{
    referencia: string;
    texto: string;
}

interface Evento
{
    nombre: string;
    articulo?: string;
    escrituras?: Escritura[];
}

interface EventoPageProps
{
    params: { nombre: string };
}

export default async function EventoPage ( { params }: EventoPageProps )
{
    const { nombre } = await params;

    let evento: Evento | undefined;
    for ( const periodo of Object.values( periodosData.Periodos ) )
    {
        evento = periodo.Eventos.find( ( e: Evento ) => e.nombre === nombre );
        if ( evento ) break;
    }

    if ( !evento )
    {
        return <p>Evento no encontrado</p>;
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">{ evento.nombre }</h1>

            { evento.articulo ? (
                <div
                    className="mt-4 text-lg text-gray-700"
                    dangerouslySetInnerHTML={ { __html: evento.articulo } }
                />
            ) : (
                <p className="mt-4 text-lg text-gray-500">No hay información detallada disponible para este evento.</p>
            ) }

            { evento.escrituras && evento.escrituras.length > 0 ? (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">Escrituras Asociadas</h2>
                    { evento.escrituras.map( ( escritura: Escritura, index: number ) => (
                        <div key={ index } className="mt-4">
                            <h4 className="text-xl font-semibold">{ escritura.referencia }</h4>
                            <p className="text-lg text-gray-700">{ escritura.texto }</p>
                        </div>
                    ) ) }
                </div>
            ) : (
                <p className="mt-4 text-lg text-gray-500">No hay escrituras asociadas para este evento.</p>
            ) }
        </div>
    );
}
