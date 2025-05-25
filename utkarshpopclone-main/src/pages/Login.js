import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    // Simple mock login; in real world, you'd validate
    setUser({
      name: 'Marry Doe',
      email: email
    });
    navigate('/account-settings');
  };

  return (
    <div className="page">
      <h2>Signin to your<br /> PopX account</h2>
      <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
      <InputField label="Email Address" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} />
      <InputField label="Password" type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button text="Login" onClick={loginUser} variant="primary1" />
    </div>
  );
}
