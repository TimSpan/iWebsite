import Header from './../components/header'
import Footer from './../components/footer'

export default function About() {
  return (
    <main className="">
      <Header />
      <div className="container mx-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container flex flex-col justify-between px-8">
          <h1 className="next-error-h1 text-9xl">404</h1>
          <h2 className="next-error-h2 text-7xl">This page could not be found</h2>
        </div>
      </div>
      <Footer />
    </main>
  )
}
