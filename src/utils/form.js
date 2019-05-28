export function generateFormData(formElement) {
  const formData = {};
  for (let elem of formElement) {
    if (elem.name !== '') {
      formData[elem.name] = elem.value;
    }
  }
  return formData;
}
