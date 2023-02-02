import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Box
} from '@mui/material';

import { useAuth } from "../../context/authContext";
import ProfileForm from '../../components/ProfileForm';
import api from '../../queries/api';

function CreateProfile() {
  const user = useAuth();
  const navigate = useNavigate();
  if (!user.user) {
    navigate('/login')
  }

  const onSubmit = async (data: any) => {
    const apiResponse = await api().post(`/create`, data);
    if (apiResponse.status === 200) {
      navigate("/");
    } else {
      alert('Cannot add profile data! Please check your network')
    }
  }

  useEffect(() => {
    if (!user.user) {
      navigate('./login')
    }
  }, [user.user])

  return (
    <Box sx={{ mt: 5 }}>
      <ProfileForm submitText="Create" submitAction={onSubmit} />
    </Box>
  )
}

export default CreateProfile;
