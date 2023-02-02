import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box
} from '@mui/material';

import { useAuth } from "../../context/authContext";
import ProfileForm from '../../components/ProfileForm';
import api from '../../queries/api';

function EditProfile() {
  const user = useAuth();
  const navigate = useNavigate();

  const [currentID, setCurrentID] = useState<string>("");

  const { id } = useParams();

  useEffect(() => {
    setCurrentID(id !== undefined ? id : "");
  }, [])

  useEffect(() => {
    if (!user.user) {
      navigate('./login')
    }
  }, [user.user])

  const profile = useSelector((state: any) => state.profile.profile);

  const onUpdateSubmit = async (data: any) => {
    const apiResponse = await api().put(`/update/${currentID}`, data);
    if (apiResponse.status === 200) {
      navigate("/");
    } else {
      alert('There was an error while updating data! Please check your network')
    }
  }

  return (
    <Box sx={{ mt: 5 }}>
      <ProfileForm profile={profile} submitText="Update" submitAction={onUpdateSubmit} />
    </Box>
  )
}

export default EditProfile;
