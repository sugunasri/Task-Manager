import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useAsyncError } from 'react-router-dom';

const SignUp = () => {
  const [ profilePic, setProfile ] = useState(null);
  const [ fullName, setFullName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ adminInviteToken, setAdminInviteToken] = useState('');

  const [ error, setError ] = useState("");
  return (
    <AuthLayout>

    </AuthLayout>
  )
}

export default SignUp
