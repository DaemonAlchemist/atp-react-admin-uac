/**
 * Created by AWITTROCK on 6/21/2017.
 */

import config from "atp-config";

config.setDefaults({
   login: {
       tokenPath: "BODY:results:loginToken",
       additionalFields: {}
   }
});