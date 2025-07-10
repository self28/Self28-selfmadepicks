import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-center p-10">
      <Head>
        <title>SelfMadePicks</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">SelfMadePicks</h1>
      <p className="text-lg">🔥 AI Sports Betting Picks with Parlay Builder</p>
    </div>
  )
}