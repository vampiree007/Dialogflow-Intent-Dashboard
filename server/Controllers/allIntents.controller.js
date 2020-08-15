const dialogflow = require('dialogflow');
require('dotenv').config({ path: './server/config.env'});

// Extracting Project Id from config.env File
const projectId = process.env.googleProjectID;

// Instantiates clients
const client = new dialogflow.v2.IntentsClient();

// Iterate over all elements.
const formattedParent = client.projectAgentPath(projectId);

exports.getIntents = async(req, res) => {
    try{
        // Setting Request Token, Here "intentView" returns all details mandatory to populate
        // the Training Phrases.
        const request = {
            parent: formattedParent,
            'intentView': 'INTENT_VIEW_FULL'
          };

        // Fetching Intent list using Dialog Flow API //
        const response = await client.listIntents(request)

        if(response){
            res.status(200).json({
                status: 'success',
                length: response[0].length,
                response: response[0]
            })
        }
    }catch(err){
        //if error console.log(error)
        console.log(err)
    }
}
