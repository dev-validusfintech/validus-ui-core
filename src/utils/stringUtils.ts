export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  export const isEmpty = (str: string): boolean => {
    return !str || str.trim().length === 0;
  };
  