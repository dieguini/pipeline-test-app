import React, { useContext } from "react";

import ChatbotContext from "../contexts/ChatbotContext";
import Grid from "../components/charts/components/Grid";

export const Chart = () => {

  const { chartData } = useContext(ChatbotContext);

  // const data = {
  //   labels: generalData.map((data) => data),
  // };

  // const [category, setCategory] = useState(null);
  // const [isTable,setIsTable] = useState(null);
  // const [dataTable,setDataTable] = useState(null);

  // const changeCategory = (e) => {
  //   let grid_obj = {
  //     name: responseFirstLabel.name,
  //     headers: responseFirstLabel.columns,
  //     rows: responseFirstLabel.rows ,
  //     labels: responseFirstLabel.rows.map((data) => data[responseFirstLabel.columns[1]]),
  //     rowsToShow: responseFirstLabel.rows.map((data) => data[responseFirstLabel.columns[2]])
  //   }
 
  //   switch (e.target.innerText) {
  //     case "R1 GRADES":
  //       setIsTable(true);
  //       setCategory(
  //         <Grid
  //           name={grid_obj.name}
  //           headers={grid_obj.headers} 
  //           rows={grid_obj.rows}
  //         />
  //       );
  //       setDataTable(grid_obj);
  //       break;
  //     case "R2 APPLICATION":
  //       setIsTable(false);
  //       setCategory(
  //         <BarChart
  //         label={grid_obj.name}
  //         labels={grid_obj.labels}
  //         data={grid_obj.rowsToShow}
  //         borderColor="black"
  //         borderWidth={2}
  //       /> );
  //       setDataTable(grid_obj);
  //       break;
  //     default:
  //       break;      
  //   }
  // };

  return (
    <div 
      className="container py-2" 
      style={{ 
        backgroundColor: "#ffffff", 
        boxShadow: '0px 0px 18px 0px #c7c7c7',
        borderRadius: '5px',
        marginTop: 50
        }}>
        {/* TODO: implement reports navigation menu */}
        {/* <div className="row">
          <div className="col-12">
            <div className="card p-3 pb-2">
              <div className="row justify-content-center">
                {data.labels.map((label, index) =>
                  index < 3 && (
                    <div className="col-4 col-md-4 col-lg-4 col-xl-2">
                      <MDBBtn
                        id="send-button"
                        style={{ backgroundColor: "var(--main-color-light)" }}
                        onClick={changeCategory}
                        key={index}
                      >
                        {label}
                      </MDBBtn>
                    </div>
                  )
                )}
                {data.labels.length > 3 && (
                  <div className="col-4 col-md-4 col-lg-4 col-xl-2">
                    <MDBDropdown>
                      <MDBDropdownToggle caret style={{ backgroundColor: "#27187E" }}>
                        More Reports
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic>
                        {data.labels.slice(3).map((label) => (
                          <MDBDropdownItem link key={label}>{label}</MDBDropdownItem>
                        ))}
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </div>
                ) }
              </div>
            </div>
          </div>
        </div> */}

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
