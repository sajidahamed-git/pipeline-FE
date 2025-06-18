import Mustache from "mustache";

export default function extractVariableName(value) {

    try {
        
        const tokens = Mustache.parse(value);
      
        const variableName = tokens
          .filter(([type]) => type === "name") //only plain variables
          .map(([_, name]) => name); //extract the variable names
          return variableName;
    } catch (error) {
        //malformed mustache template return empty array
        console.error("Error parsing Mustache template:", error);
        return [];
        
    }

}
