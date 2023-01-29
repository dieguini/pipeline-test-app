import { useState } from "react";
import "../../App.css";
import BarChart from "./components/BarChart";
import {UserData} from './data/Data'


function BarChartPage() {

  const[userData, setUserData] = useState({
    labels: UserData.map((data) => data.Bootcamp),
    datasets:
      [
        {
          label: "Grade Average of every bootcamp",
          data: UserData.map((data) => data.Grades),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
            borderColor: "black",
            borderWidth: 2,
        }
      ]
  })

  return (
    <div className="BarChartPage">
      <div style={{width: 1000}}>
      <BarChart chartData={userData}/>
      </div>
    </div>
  );
}

export default BarChartPage;
