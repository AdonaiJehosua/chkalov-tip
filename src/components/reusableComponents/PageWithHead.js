import Head from 'next/head'

export default function PageWithHead({ pageComponent, title }) {

    return (
        <>
            <Head>
                <title>{`Чкалов.Типография${title ? ` | ${title}` : ''}`}</title>
            </Head>
            {pageComponent}
        </>
    )
}