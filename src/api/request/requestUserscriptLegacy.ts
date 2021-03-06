import {requestInterface} from "./requestInterface";
import {xhrI, xhrResponseI, sendMessageI, responseMessageI} from "./../messageInterface";

declare var GM_xmlhttpRequest: any;

export const requestUserscriptLegacy: requestInterface = {
    async xhr(method, url):  Promise<any>{
      return new Promise((resolve, reject) => {
        var request =
        {
            method: method,
            url: url,
            synchronous: false,
            headers: [],
            data: null,
            onload: function(response) {
                console.log(response);
                var responseObj: xhrResponseI = {
                  finalUrl: response.finalUrl,
                  responseText: response.responseText,
                  status: response.status
                }
                resolve(responseObj);
            }
        }
        if(typeof url === 'object'){
          request.url = url.url;
          request.headers = url.headers;
          request.data = url.data;
        }
        GM_xmlhttpRequest(request);
      });
    },
};
