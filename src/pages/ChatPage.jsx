import React, { useState } from "react";
import Chatview from "../components/chatbot/Chatview";
import { ChatbotProvider } from "../contexts/ChatbotContext";
import { Chart } from "./Chart";
import DoughnutChart from "../components/charts/components/DoughnutChart";
import {  MDBBtn } from "mdb-react-ui-kit";

const ChatPage = () => {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  return (
    <div>
      <ChatbotProvider>
        <div >
          <Chart />
          <DoughnutChart />
          <div style={{ width:"26%", position: "fixed", right:"0", bottom:"0" }}>
            <MDBBtn
              onClick={toggleShow}
              style={{ backgroundColor: 'var(--main-color-light)' }}
              size="lg"
              block
              className="mt-3 position-relative align-items-right"
            >   
              <span>Chat with me</span>
              {/* <MDBIcon fas icon="chevron-down" />  */}
            </MDBBtn>
            <div style={{ visibility: showShow ? "visible" : "hidden" , height: showShow ? "auto" : "0px" }}>
              <Chatview />
            </div>
          </div>
        </div>
      </ChatbotProvider>
    </div>
  );
};

export default ChatPage;
