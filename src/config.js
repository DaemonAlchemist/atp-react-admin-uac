
import config from "atp-config";

config.setDefaults({
   login: {
       tokenPath: "BODY:results:loginToken",
       additionalFields: {}
   }
});