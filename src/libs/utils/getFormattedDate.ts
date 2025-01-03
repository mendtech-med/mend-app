export function getFormattedDate(unixTimestamp: number): string {
    if(!unixTimestamp) return "Invalid"
    // Convert the Unix timestamp to milliseconds
    const date = new Date(unixTimestamp * 1000);

    // Format the date to "Month Day, Year"
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return date.toLocaleDateString(undefined, options);
}