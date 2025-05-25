import React from 'react';
import '../styles/Form.css';

export default function RadioGroup({ label, options, selected, onChange }) {
  return (
    <div className="radio-group">
      <label className="radio-label">
        {label}<span className="required-asterisk">*</span>
      </label>
      <div className="radio-options">
        {options.map((opt) => (
          <label key={opt} className="radio-option">
            <input
              type="radio"
              value={opt}
              checked={selected === opt}
              onChange={() => onChange(opt)}
              name="radio"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
