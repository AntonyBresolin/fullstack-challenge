export const isValidCPF = (cpf) => {
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  let sum = 0;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;
  return true;
};

export const generateCPF = () => {
  let cpf = '';
  for (let i = 0; i < 9; i++) cpf += Math.floor(Math.random() * 9).toString();
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
  let checkDigit = 11 - (sum % 11);
  if (checkDigit > 9) checkDigit = 0;
  cpf += checkDigit.toString();
  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
  checkDigit = 11 - (sum % 11);
  if (checkDigit > 9) checkDigit = 0;
  cpf += checkDigit.toString();
  return cpf;
};
