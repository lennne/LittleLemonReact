import { ReactNode } from "react";

const Dialog = ({children}:{children: ReactNode}) => {
    return(
    <div>
        {children}
    </div>
    )
}


export const ContainerPattern = () => {
    return (
        <Dialog>
            <h1>Hello</h1>
        </Dialog>
    );
}