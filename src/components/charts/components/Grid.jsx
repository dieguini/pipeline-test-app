import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


export default function Grid({ headers, rows }) {

    const normalizeHeaders = (rows) => {
      const formattedData = rows.map((row) => {
        const formattedRow = row.split("_").map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        }
        );
        return formattedRow.join(" ");
      });
      return formattedData;
    };

    const convertDate = (date) => {
      const year = date.slice(2, 6);
      const month = date.slice(0, 2);
      const monthName = new Date(year, month).toLocaleString("default", {
        month: "short",
      });

      return `${monthName} ${year}`;
    }  

    return (
        
    <MDBTable>
      <MDBTableHead style={{backgroundColor: "#27187E", color: "white"}}>
        <tr>
        {normalizeHeaders(headers)?.map((data, index) => 
            <th key={index} scope='col'>{data}</th>
        )}
        </tr>
      </MDBTableHead>
      
      <MDBTableBody  >
        {rows?.map((data, index) => 
            <tr key={index}>
            {headers?.map((data2, index2) => 
            <th key={index2} scope='row'>{/date/.test(data2)? convertDate(data[data2]) : data[data2]}</th>
            )}</tr>
        )}
      </MDBTableBody>
    </MDBTable>
  );
}