import { RouterProvider } from "react-router-dom";
import Router from './router/Router';
import { Amplify, Auth } from 'aws-amplify';
import { AWSLexV2Provider } from '@aws-amplify/interactions';
import awsExports from './aws-exports';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

Amplify.addPluggable(new AWSLexV2Provider());

const interactionsConfig = {
    Auth: {
        identityPoolId: "us-east-1:20b9566e-0c43-4562-85b7-7cda2cc52fa2",
        region: "us-east-1"
    },
    Interactions: {
        bots: {
            MegamindBotBootcamp_LexSecond: {
              name: "MegamindBotBootcamp_LexSecond",
              aliasId: "TSTALIASID",
              botId: "ATGDXKJG7X",
              localeId: "en_US",
              region: "us-east-1",
              providerName: "AWSLexV2Provider",
          },
        }
    }
}

const fileUploadConfig = {
    Auth: {
        identityPoolId: "us-east-1:20b9566e-0c43-4562-85b7-7cda2cc52fa2",
        region: "us-east-1"
    },
    Storage: {
      AWSS3:{
        bucket: "s3-megamind-csv",
        region: "us-east-1"
      }
    }
}

Auth.configure(awsExports);
Amplify.configure(interactionsConfig);
Amplify.configure(fileUploadConfig);
const App = () => (
    <>
        <ToastContainer/>
        <RouterProvider router={Router} />
    </>
)

export default App;
