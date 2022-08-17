import React from 'react';

const Input = ({ input, onChange }) => {
  return <input {...input} onChange={onChange} />;
};

export default Input;
