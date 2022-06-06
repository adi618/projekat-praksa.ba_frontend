export const getFormData = (element) => Object.keys(element).reduce((formData, key) => {
  formData.append(key, element[key]);
  return formData;
}, new URLSearchParams());
