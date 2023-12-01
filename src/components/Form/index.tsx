import { useState } from "react";
import InputText from "../InputText";
import { Button } from "@mui/material";
import * as Yup from 'yup';
import { toast } from "react-toastify";

const Form = () => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState<string | undefined>(undefined);
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneError, setPhoneError] = useState<string | undefined>(undefined);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [dateValue, setDateValue] = useState<string>('');
  const [dateError, setDateError] = useState<string | undefined>(undefined);

  const handleNameChange = (value: string) => {
    setNameValue(value);
    setNameError(undefined);
  };

  const handlePhoneChange = (value: string) => {
    setPhoneValue(value);
    setPhoneError(undefined);
  };

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
    setEmailError(undefined);
  };

  const handleDateChange = (value: string) => {
    setDateValue(value);
    setDateError(undefined);
  };

  const handleSubmit = () => {
    const schema = Yup.object({
      Nome: Yup.string()
        .min(4, 'O campo deve ter mais de 3 caracteres')
        .required('Este campo é obrigatório'),
      Telefone: Yup.string()
        .matches(/^\d{10}$/, 'Telefone inválido')
        .required('Este campo é obrigatório'),
      Email: Yup.string()
        .email('E-mail inválido')
        .required('Este campo é obrigatório'),
      Data: Yup.date()
        .required('Este campo é obrigatório')
        .typeError('Data inválida') 
        .test('data-valida', 'Data inválida', (value) => {
          const parsedDate = new Date(value);
          return !isNaN(parsedDate.getTime());
        }),
    });

    const formData = {
      Nome: nameValue,
      Telefone: phoneValue,
      Email: emailValue,
      Data: dateValue,
    };

    schema.validate(formData, { abortEarly: false })
      .then(() => {
        console.log('Formulário válido. Dados:', formData);
        setNameValue(''); 
        setPhoneValue(''); 
        setEmailValue(''); 
        setDateValue('');
        toast.success('Dados enviados com sucesso.', {
          position: 'top-center',
          autoClose: 3000,
        });

      })
      .catch((validationError: Yup.ValidationError) => {
        const errors: { [key: string]: string } = {};
        validationError.inner.forEach((error) => {
          errors[error.path!] = error.message;
        });
        setNameError(errors.Nome);
        setPhoneError(errors.Telefone);
        setEmailError(errors.Email);
        setDateError(errors.Data);
      });
  };

  return (
    <form style={{display: "flex", justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}>
      <h2>Deixe seu registro aqui</h2>
      <InputText
        label="Nome"
        name="Nome"
        value={nameValue}
        onChange={handleNameChange}
        required={true}
        error={Boolean(nameError)}
        helperText={nameError}
      />
      <InputText
        label="Telefone"
        name="Telefone"
        value={phoneValue}
        onChange={handlePhoneChange}
        required={true}
        error={Boolean(phoneError)}
        helperText={phoneError}
      />
      <InputText
        label="Email"
        name="Email"
        value={emailValue}
        onChange={handleEmailChange}
        required={true}
        error={Boolean(emailError)}
        helperText={emailError}
      />
      <InputText
        name="Data"
        value={dateValue}
        type="date"
        onChange={handleDateChange}
        required={true}
        error={Boolean(dateError)}
        helperText={dateError}
      />
      <Button variant="contained" onClick={handleSubmit} style={{margin: '30px'}}>
        Enviar
      </Button>
    </form>
  );
};

export default Form;
