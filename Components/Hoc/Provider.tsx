import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider attribute="class" enableSystem defaultTheme='light'>

            {children}
        </ThemeProvider>

    )
}

export default Provider
