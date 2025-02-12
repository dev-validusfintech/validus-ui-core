export const isEmailValid = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const isPhoneNumberValid = (phone: string): boolean => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };
  