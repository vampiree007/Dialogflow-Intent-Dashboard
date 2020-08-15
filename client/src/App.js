import React from 'react';
import { Route, Switch} from "react-router-dom";

//This Component Contains the Chat Bot Page for live testing Intent API
import ChatMain from './ChatbotComponents/chatMain';

//This Component Contains the original Intent API Page
import IntentPage from './Components/Intent.page';


function App() {
    return (
            <Switch>
                <Route exact path={`/`} component={IntentPage} />
                <Route exact path={`/chatbot`} component={ChatMain} />
            </Switch>
    )
}

export default App;
