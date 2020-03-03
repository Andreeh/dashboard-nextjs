import Head from 'next/head';
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Dashboard App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Hello</h1>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    );
};

export default Index;
