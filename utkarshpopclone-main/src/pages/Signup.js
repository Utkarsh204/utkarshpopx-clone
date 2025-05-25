import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import RadioGroup from '../components/RadioGroup';
import Button from '../components/Button';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "", phone: "", email: "", password: "", company: "", isAgency: "Yes"
  });

  const handleChange = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = () => {
    // In real app: validate + send to backend
    console.log("User registered:", form);
    navigate("/account-settings");
  };

  return (
    <div className="page">
      <h2>Create your<br />PopX account</h2>
      <InputField 
        label="Full Name" 
        required 
        placeholder="Marry Due"
        value={form.fullName} 
        onChange={handleChange("fullName")} 
      />
      <InputField 
        label="Phone number" 
        required 
        placeholder="Marry Due"
        value={form.phone} 
        onChange={handleChange("phone")} 
      />
      <InputField 
        label="Email address" 
        required 
        placeholder="Marry Due"
        value={form.email} 
        onChange={handleChange("email")} 
      />
      <InputField 
        label="Password" 
        type="password" 
        required 
        placeholder="Marry Due"
        value={form.password} 
        onChange={handleChange("password")} 
      />
      <InputField 
        label="Company name" 
        required 
        placeholder="Marry Due"
        value={form.company} 
        onChange={handleChange("company")} 
      />
      <RadioGroup 
        label="Are you an Agency?" 
        options={["Yes", "No"]} 
        selected={form.isAgency} 
        onChange={(val) => setForm({ ...form, isAgency: val })}
      />
      <Button text="Create Account" onClick={handleSubmit} />
    </div>
  );
}
