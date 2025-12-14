import { useState } from 'react';

export const useNodeConfig = (id, data, defaults = {}) => {
  const [fields, setFields] = useState({
    ...defaults,
    ...data
  });

  const updateField = (fieldName, value) => {
    setFields(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleChange = (fieldName) => (e) => {
    updateField(fieldName, e.target.value);
  };

  return {
    fields,
    updateField,
    handleChange
  };
}