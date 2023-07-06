export const stringToObject = (str) => {
    try {
      const obj = JSON.parse(str);
      return obj;
    } catch (error) {
      console.error('Invalid JSON string:', error);
      return null;
    }
  }