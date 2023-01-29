import React, { useContext, useState } from 'react'
import ChatbotContext from '../../contexts/ChatbotContext'
import { MDBBtn } from 'mdb-react-ui-kit';
import './styles/Chatview.css'


const ChatView = () => {
    const { messages, sendMessage } = useContext(ChatbotContext);
    const [currentMessage, setCurrentMessage] = useState("");
    
    const handleCurrentMessageChange = ({ target }) => {
        setCurrentMessage(target.value);
    }

    const handleKeyDownInput = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSendMessage();
        }
    }


    const handleSendMessage = () => {
        sendMessage(currentMessage);
        setCurrentMessage("");
    }


    return (
        <div>       
                        <div className="col-md-12 col-lg-12 col-xl-12" >
                            <div className="card" id="chat2">
                                <div className="card-header d-flex justify-content-between align-items-center p-3">
                                    <h5 className="mb-0">Megamind Chatbot</h5>
                                </div>
                                <div className="card-body" id="message-container" style={{ position: "relative", height: "400px" ,maxHeight: "700px", overflowY: "scroll"}}>
                                    <ul className="chat" id="chatList">
                                        {messages.map((message, index) => (
                                            <div key={index}>
                                                {message.author === "bot" ? (
                                                    <li className="bot">
                                                        <div className="d-flex flex-row justify-content-start mb-4">
                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                                                className='bot-avatar' alt="bot avatar" />
                                                            <div>
                                                                <p className="bot-panel small p-2 ms-3 mb-1 rounded-3">{message.message}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ) : (
                                                    <li className="user">
                                                        <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                                                            <div>
                                                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{message.message}</p>
                                                            </div>
                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                                                className="user-avatar" alt="user avatar" />
                                                        </div>
                                                    </li>
                                                )}
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                                <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                        alt="avatar 3" style={{ width: "40px", height: "100%" }} />
                                    <input type="text" autoComplete='off'
                                        className="form-control form-control-lg" 
                                        id="exampleFormControlInput1"
                                        placeholder="Type message"
                                        onKeyDown={handleKeyDownInput} 
                                        onChange={handleCurrentMessageChange} 
                                        value={currentMessage}  />
                                    <MDBBtn rounded id="send-button" onClick={handleSendMessage}>Send</MDBBtn>
                                </div>
                            </div>
                    </div>
        </div>
    )
}

export default ChatView;