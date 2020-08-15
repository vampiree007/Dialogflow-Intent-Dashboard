import React from 'react';
import { Route, Switch} from "react-router-dom";
import ChatMain from './ChatbotComponents/chatMain';
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
