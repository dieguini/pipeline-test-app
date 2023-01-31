import React, { useContext, useState} from "react";

import ChatbotContext from "../contexts/ChatbotContext";
import Grid from "../components/charts/components/Grid";
import{ SimpleButton,Dropdown  }from "../components/buttons/Buttons";



export const Chart = () => {

  const { chartData } = useContext(ChatbotContext);
  const [selectedOption, setSelectedOption] = useState('Frequent Requests');
  const FrequentList = ['DevOps Bootcamp Applicants', 'DevOps Bootcamp Grades', 'Dev Bootcamp Subjects','QA Bootcamp Grades']; //test data should be replaced on integration
  const HistoryList =  ['DevOps Bootcamp Applicants', 'DevOps Bootcamp Grades', 'Dev Bootcamp Subjects']; //test data should be replaced on integration

  const firstColumnStyle = {
    width: '20%',
    borderRight: '2px solid #8b8b8b'
  }
  const secondColumnStyle = {
    width: '80%',
  }

  return (
    <div 
      className="container py-2" 
      style={{ 
        backgroundColor: "#ffffff", 
        boxShadow: '0px 0px 18px 0px #c7c7c7',
        borderRadius: '5px',
        marginTop: 50
        }}>
        <div className="row">
          <div className="col-1" style={firstColumnStyle}>
             <Dropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
          </div>
          <div className="col-2" style={secondColumnStyle}>
              {selectedOption === "Frequent Requests" ? (
              <div className="flex-wrap" style={{display: "flex"}}>
                {FrequentList.map((item, index) => (
                  <SimpleButton variant='request' key={index} style={{margin: "0 3px",justifyContent: "center"}}> 
                    {item}
                  </SimpleButton>
                ))}
              </div>
              ) : 
              <div className="flex-wrap" style={{display: "flex"}}>
                {HistoryList.map((item, index) => (
                  <SimpleButton variant='request' key={index}> 
                    {item}
                  </SimpleButton>
                ))}
              </div>}
          </div>
        </div>
        <div className="justify-content-center text-center">
          <div className="py-3">
            {chartData ? (
              <>
              <span 
                style={{ 
                  backgroundColor: 'var(--main-color-dark',
                  fontSize: '1.5em',
                  color: 'var(--neutral-light)',
                  fontWeight: 'bold',
                  padding: '0 10px',
                  marginBottom: 20,
                  borderRadius: 5
                }}> {chartData.name.toUpperCase()}</span>
              <Grid
                headers={chartData.columns} 
                rows={chartData.rows}
              /> </>): <img src="/NOREPORST.PNG" alt="No-Data-Found-1" border="0" /> }
          </div>
        </div>
      
    </div>
  );
};
