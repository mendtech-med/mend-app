export function cleanAndParseJson(input: string): any {
    // Regular expression to match the JSON content within ```json and ```
    const regex = /```json\s*([\s\S]*?)```/;

    // Execute the regex on the input string
    const match = input.match(regex);
    
    // If no match is found, throw an error
    if (!match || match.length < 2) {
        throw new Error('Invalid JSON format: Unable to find JSON code block.');
    }

    // Extract the JSON string and trim any extra whitespace
    const jsonString = match[1].trim();

    try {
        // Parse and return the JSON object
        const parsed = JSON.parse(jsonString);
        return parsed;
    } catch (error) {
        // If parsing fails, throw an error with details
        throw new Error('JSON parse error: ' + (error as Error).message);
    }
}
