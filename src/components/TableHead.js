import React, { useState } from 'react';
import { Thead, Tr, Th } from 'react-super-responsive-table'
import './SuperResponsiveTableStyle.css'

const TableHead = ({ columns, handleSorting }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor) => {
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
            setSortField(accessor);
            setOrder(sortOrder);
            handleSorting(accessor, sortOrder);
    };

    return (
        <Thead>
            <Tr>
                {columns.map(({ label, accessor }) => {
                    return <Th key={accessor} onClick={() => handleSortingChange(accessor)}>{label}</Th>;
                })}
             </Tr>
        </Thead>
    );
};
export default TableHead;