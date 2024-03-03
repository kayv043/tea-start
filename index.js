// Helper function to format a date in MM/DD/YYYY format
function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error("Input must be a valid Date object");
    }
  
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${month}/${day}/${year}`;
  }
  
  // Helper function to calculate the difference in days between two dates
  function daysDifference(startDate, endDate) {
    if (!(startDate instanceof Date) || isNaN(startDate) ||
        !(endDate instanceof Date) || isNaN(endDate)) {
      throw new Error("Both inputs must be valid Date objects");
    }
  
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // 24 hours in a day, 60 minutes in an hour, 60 seconds in a minute, 1000 milliseconds in a second
    const differenceInMilliseconds = endDate - startDate;
    return Math.floor(differenceInMilliseconds / millisecondsPerDay);
  }
  
  // Demo using the helper functions
  try {
    const today = new Date();
    const formattedDate = formatDate(today);
    console.log("Formatted Date:", formattedDate);
  
    const futureDate = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000)); // Adding 7 days to the current date
    const daysDiff = daysDifference(today, futureDate);
    console.log(`Difference in Days: ${daysDiff} days`);
  } catch (error) {
    console.error("Error:", error.message);
  }
  