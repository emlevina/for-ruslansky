import React, { useState, useEffect } from 'react';
import { Table } from 'react-super-responsive-table'
import './SuperResponsiveTableStyle.css'
import TableHead from './TableHead';
import TableBody from './TableBody';
import './CarList.css'

const CarsList = () => {
    const [ cars, setCars ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ isPending, setIsPending ] = useState(true)
    const columns = [
        { label: "Название", accessor: "title"},
        { label: "Год", accessor: "year"},
        { label: "Цвет", accessor: "color"},
        { label: "Статус", accessor: "status"},
        { label: "Цена", accessor: "price"},
    ]
    const url = 'https://gist.githubusercontent.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/d3df6716b2dbaf4f8eb8d72022573ab3b3d6345c/frontend_test_table.json'

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...cars].sort((a, b) => {
             return (
              a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
               numeric: true,
              }) * (sortOrder === "asc" ? 1 : -1)
             );
            });
            setCars(sorted);
           }
    };
       
    useEffect(() => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data from server')
                }
                return response.json()
            })
            .then(data => {
                setCars(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
    }, [])


    return (
        <div className='car-list'>
            { cars && 
            <Table>
                <TableHead {...{columns, handleSorting}} />
                <TableBody tableData={cars} />
            </Table> 
            }
            { error && <div className='error'>{error}</div> }
            { isPending && <div className='loader'/> }
            
        </div>
    );
};

export default CarsList;