import type { ReactNode } from "react";

interface EmptyStateProps{
    message : string;
    children? : ReactNode;
}

export default function EmptyState({message, children} : EmptyStateProps){
    return(
        <div className="state-box">
            <p>{message}</p>
            {children}
        </div>
    )
}