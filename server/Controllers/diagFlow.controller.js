const dialogflow = require('dialogflow');
require('dotenv').config({ path: './server/config.env'});

const projectId = process.env.googleProjectID;
const sessionId = process.env.dialogFlowSessionID;
const languageCode = process.env.dialogFlowSessionLanguageCode;

// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

exports.eventQuery = async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: req.body.event,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    //console.log(`  Query: ${result.queryText}`);
    //console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
}

exports.textQuery = async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    //console.log(`Query: ${result.queryText}`);
    //console.log(`Response: ${result.fulfillmentText}`);

    res.send(result)
}
