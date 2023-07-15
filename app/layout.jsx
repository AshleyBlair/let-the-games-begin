import '@styles/globals.css';

// import Nav from '@components/Nav';
// import Provider from '@components/Provider';

export const metadata = {
    title: "Let the Games Begin",
    description: 'Game night creation and invitations'
}

const Rootlayout = ( {children} ) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'>

                </div>
            </div>
            <main className='app'>
            {/* <Nav /> */}
            {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout