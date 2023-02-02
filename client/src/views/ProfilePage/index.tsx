import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container
} from "@mui/material"

import { useAuth } from "../../context/authContext";
import ProfileShow from '../../components/ProfileShow';
import api from '../../queries/api';
import {
  readProfile
} from "../../features/profileSlice";

function Profile() {
  const user = useAuth();
  const navigate = useNavigate();

  const profile = useSelector((state: any) => state.profile.profile);
  const profileId = useSelector((state: any) => state.profile.profileId);
  const dispatch = useDispatch();

  const invokeProfileAPI = async () => {
    const apiResponse = await api().get('/read');
    if (Object.keys(apiResponse.data).length === 0) {
      navigate("/profile/create");
    }
    dispatch(readProfile(apiResponse.data));
  };

  useEffect(() => {
    if (!user.user) {
      navigate('./login')
    } else {
      invokeProfileAPI();
    }
  }, [user.user])

  return (
    <Container>
      {user.user && <ProfileShow profile={profile} profileId={profileId} />}
    </Container>
  )
}

export default Profile;
