
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';

const Test: NextPage = () => {

    const links = [{
        link: '/', label: 'aa'
    }]

    return (
        <Layout title="Task Board">
            test
        </Layout>
    )
}

export default Test
