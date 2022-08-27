import React from 'react';
import { Tbody, Tr, Td } from 'react-super-responsive-table'
import './SuperResponsiveTableStyle.css'
import './TableBody.css'

const TableBody = ({ tableData }) => {
    const statuses = {
        pednding: "Ожидается",
        out_of_stock: "Нет в наличии",
        in_stock: "В наличии"
    }

    return (
        <Tbody>
            {tableData.map((car) => {
                let price = car.price.toLocaleString("ru-RU", {style:"currency", currency:"RUB", minimumFractionDigits: 0});
                let color = car.color;

                return (
                    <Tr key={car.id}>
                        <Td className="title"><span>{car.title}</span></Td>
                        <Td><span className='year lightGray'>{car.year}</span></Td>
                        <Td><span className='color lightGray'><div className='color-circle' title={color} style={{backgroundColor: color}}></div></span></Td>
                        <Td><span className='status lightGray'>{statuses[car.status]}</span></Td>
                        <Td className="price">{price}</Td>
                    </Tr>
                );
            })}
        </Tbody>
    );
};

export default TableBody;