import Nav from '@components/Nav'
import '@styles/globals.css'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover and share AI Prompts'
}
const RootLayout = ({ children }) => {
    return (
        <html Lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>

        </html>
    )
}

export default RootLayout