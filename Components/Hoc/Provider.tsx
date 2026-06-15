import React, { ReactNode } from 'react'

// Theme is forced to dark globally via the `dark` class on <html> in layout.tsx.
// ThemeProvider is no longer used.
const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

export default Provider
