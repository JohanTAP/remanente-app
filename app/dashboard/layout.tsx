"use client"

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import
{
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import
{
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function DashboardLayout ( { children }: { children: React.ReactNode } )
{
    const pathname = usePathname();

    const formatSegment = ( segment: string ) =>
    {
        return segment
            .replace( /_/g, " " )
            .replace( /\b\w/g, ( char ) => char.toUpperCase() );
    };

    const segments = pathname.split( "/" ).filter( ( seg ) => seg );

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/">
                                        Remanente App
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />

                                { segments.map( ( segment, index ) =>
                                {
                                    const isLast = index === segments.length - 1;
                                    const path = "/" + segments.slice( 0, index + 1 ).join( "/" );

                                    return (
                                        <React.Fragment key={ index }>
                                            <BreadcrumbItem>
                                                { isLast ? (
                                                    <BreadcrumbPage>{ formatSegment( segment ) }</BreadcrumbPage>
                                                ) : (
                                                    <BreadcrumbLink href={ path }>{ formatSegment( segment ) }</BreadcrumbLink>
                                                ) }
                                            </BreadcrumbItem>
                                            { !isLast && <BreadcrumbSeparator className="hidden md:block" /> }
                                        </React.Fragment>
                                    );
                                } ) }
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                { children }
            </SidebarInset>
        </SidebarProvider>
    );
}
