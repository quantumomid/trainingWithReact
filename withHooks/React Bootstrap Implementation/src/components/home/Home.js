import React from 'react'
import {data} from '../../data/data.js'
import Table from './table/Table.js';
import { Container, Row, Col } from 'react-bootstrap';

export const TableContext = React.createContext()

function Home (){
    return (
        <Container>
            <Row>
                <Col>
                    <TableContext.Provider value={data}>
                        <Table />
                    </TableContext.Provider>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
