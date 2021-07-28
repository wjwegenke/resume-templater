export default function FormatDate({date, startDate, endDate}) {
    if (startDate) {
        const start = new Date(startDate);
        const startString = String(start.getUTCMonth() + 1).padStart(2, '0') + '/' + start.getUTCFullYear();
        let endString = 'Present';
        if (endDate) {
            const end = new Date(endDate);
            endString = String(end.getUTCMonth() + 1).padStart(2, '0') + '/' + end.getUTCFullYear();
        }
        return startString + ' - ' + endString;
    } else if (date) {
        const only = new Date(date);
        const dateString = String(only.getUTCMonth() + 1).padStart(2, '0') + '/' + only.getUTCFullYear();
        return dateString;
    }
    return null;
}