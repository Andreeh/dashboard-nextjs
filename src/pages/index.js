import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import Overview from './monitor/overview';

const Home = () => {
    const router = useRouter();
    React.useEffect(() => {
        console.log(router.pathname);
        if (router.pathname === '/') {
            router.push('/monitor/overview');
        }
    }, []);

    return (
        <Layout pageTitle="Index">
            <h1>Hello</h1>
        </Layout>
    );
};

export default Overview;
