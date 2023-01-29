import React, { useContext } from "react";
import ChatbotContext from "../../../contexts/ChatbotContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const config = {
    labels: [],
    datasets: [
      {
        label: '# of applicants',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
        weight: 1
      },
    ],
};

function DoughnutChart() {

    const { chartData } = useContext(ChatbotContext);

    const transformData = (data) => {
        const values = {};
        for( let row of chartData.rows){
            let status = row.status;
            values[status] = !values[status] ? 1 : ++values[status];
        }

        config.labels = Object.keys(values);
        config.datasets[0].data = Object.values(values);

        return config;

    }

    return  ( chartData && 
        <div 
            className="container d-flex py-2 justify-content-center" 
            style={{ 
            backgroundColor: "#ffffff", 
            boxShadow: '0px 0px 18px 0px #c7c7c7',
            borderRadius: '5px',
            height: 500,
            marginTop: 50
        }}>
            <Doughnut data={transformData(chartData)} />
        </div>
    )

}

export default DoughnutChart;