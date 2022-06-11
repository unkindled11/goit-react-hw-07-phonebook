import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62a316055bd3609cee622adc.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};