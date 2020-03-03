import Layout from '../../components/layout';
import SelectCustomer from './../../components/select-customer';
import PageHeader from './../../components/page-header';
import fetch from '../../libs/fetch';
import useSWR from 'swr';

const isServer = typeof window === 'undefined';

export default function Overview({ customers }) {
    const [customer, setCustomer] = React.useState('');
    const { data: todos } = useSWR(
        customer ? 'https://jsonplaceholder.typicode.com/todos' : null,
        fetch
    );

    // console.log('users', users);
    // console.log('data', todos);

    const callback = React.useCallback(
        ({ selectedItem }) => setCustomer(selectedItem),
        []
    );
    return (
        <Layout pageTitle="Overview">
            <PageHeader
                title="Overview"
                actions={
                    <SelectCustomer items={customers} onChange={callback} />
                }
            />
            <div>{customer}</div>
            {customer
                ? todos
                    ? todos.map(todo => <div key={todo.id}>{todo.title}</div>)
                    : 'Loading...'
                : null}
            {/* {todos.map(todo => (
                <div key={todo.id}>{todo.title}</div>
            ))} */}
        </Layout>
    );
}

Overview.getInitialProps = async () => {
    // if (isServer) {
    //     console.log('we are on SERVER');
    // } else {
    //     console.log('we are on CLIENT');
    // }
    // const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
    return {
        customers: ['Test', 'Gris']
    };
};
