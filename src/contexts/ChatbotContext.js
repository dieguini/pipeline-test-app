import { createContext, useEffect, useState } from 'react';
import { Interactions } from "aws-amplify"
import { toastSuccess } from '../utils/Toasters';




const ChatbotContext = createContext();


export const ChatbotProvider = ({children}) => {

    const [ chartData, setChartData ] = useState(null);
    const [isLoading, setIsLoading ] = useState(false);
    const [ messages, setMessages ] = useState([
        {
            author: "bot",
            contentType: "PlainText",
            message: "Welcome! We are excited to help you."
        },
        {
            author: "bot",
            contentType: "PlainText",
            message: "Would you like to get information about bootcamps, applicants or maybe get some reports?"
        }
    ])


    const handleSendMessage = async (message) =>  {
        try{
            const normalizedMessage = normalizeSendedMessage(message)
            setMessages([ ...messages, normalizedMessage ])

            setIsLoading(true);
            const response = await Interactions.send("MegamindBotBootcamp_LexSecond", message);  
            setIsLoading(false);

            handleChartData(response);

            const normalizedResponse = normalizeResponseMessages(response.messages)
            setMessages([...messages, normalizedMessage, ...normalizedResponse])
        } catch(error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        if(isLoading){
            setMessages( messages => [...messages, {
                author: "bot",
                contentType: "PlainText",
                message: "Typing..."
            }])
        }
    }, [isLoading, setMessages])


    const handleChartData = (response) => {
        const data = response.sessionState.sessionAttributes?.response;
        if(data){
            setChartData(JSON.parse(data));
            toastSuccess('Report generated successfully');
        }
    }


    const normalizeResponseMessages = (messages) => {
        return messages.map( message => ({
            author: "bot", 
            contentType: message.contentType,  
            message: message.content }))
    }


    const normalizeSendedMessage = (message) => {
        return {
            author: "user",
            contentType: "PlainText",
            message: message
        }
    }


    const contextValues = {
        chartData,
        messages,
        sendMessage: handleSendMessage
    }


    return (
        <ChatbotContext.Provider value={contextValues}>
            {children}
        </ChatbotContext.Provider>
    )

}

export default ChatbotContext;