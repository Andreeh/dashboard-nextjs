import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <Link href="/" as={process.env.BACKEND_URL + '/'}>
                <a>Home</a>
            </Link>
        </div>
    );
}
