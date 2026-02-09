import { ReactNode } from "react"

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <div className="w-full max-w-360 mx-auto px-10">
            {children}
        </div>
    )
}

export default Layout