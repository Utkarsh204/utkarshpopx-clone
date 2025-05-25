import React from 'react';
import '../styles/Form.css';

export default function InputField({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder = ""
}) {
  return (
    <div className="floating-form-group">
      <label className="floating-label">
        {label}
        {required && <span className="required-asterisk">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="floating-input"
      />
    </div>
  );
}
