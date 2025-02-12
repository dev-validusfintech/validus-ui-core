export const formatDate = (date: Date, format: string = "YYYY-MM-DD"): string => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    
    return format.replace("YYYY", yyyy.toString()).replace("MM", mm).replace("DD", dd);
  };
  