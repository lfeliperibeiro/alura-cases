import Head from 'next/head'

export const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - Alura Cases</title>
    </Head>
  )
}
