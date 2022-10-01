import { sentilize } from './sentilizer';
export const routes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, h){
            console.log("A")
            let resp = { sentiment: 'Neutral'};
             return 'THis is the homepage';
            return resp;
        }
    },
    {
        method: 'POST',
        path: '/sentilize',
        handler: function(request, h) {
            console.log("B")
            let payload = request.payload;
            console.log("Payload"+ request)
             return "b"
            return sentilize(payload.sentence);
        }
        }
    ];
