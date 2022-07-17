export const isValidInputText = (text: string): boolean =>
  /^[a-zA-Zà-úÀ-Ú\s]+$/.test(text);
