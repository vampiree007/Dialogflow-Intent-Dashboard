const dialogflow = require('dialogflow');
const config = require('../config/keys');

// Instantiates clients
const intentsClient = new dialogflow.IntentsClient();
const client = new dialogflow.v2.IntentsClient();
// Iterate over all elements.
const formattedParent = client.projectAgentPath('agent-black-pqeh');

exports.getIntents = async(req, res) => {
    const request = {
        parent: formattedParent,
        'intentView': 'INTENT_VIEW_FULL'
      };
    const response = await client.listIntents(request)

    if(response){
        res.status(200).json({
            status: 'success',
            length: response[0].length,
            response: response[0]
        })
    }
}
