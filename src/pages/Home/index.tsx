import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../components/Card';
import Inspections from '../Inspections';

import { Container, CardContent } from './styles';

const Home: React.FC = () => {
    const { push } = useHistory();

    return (
        <>
            <Container className='grid'>
                <div >
                    <Card
                        bounce
                        pointer
                        onClick={() => push('inspections/new')}
                    >
                        <CardContent>
                            <h3>Novo Web Crawling</h3>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card
                        bounce
                        pointer
                        onClick={() => push('inspections/show')}
                    >
                        <CardContent>
                            <h3>Consultar Web Crawling</h3>
                        </CardContent>
                    </Card>
                </div>
            </Container>
            <Inspections />
        </>
    );
};

export default Home;