import { redirect } from 'react-router-dom';

const withAuthLoader = (loader) => {
  return async (args) => {
    const { request } = args;
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw redirect('/login');
    }
    return loader(args);
  };
};

export default withAuthLoader;
