import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Button,
    TextField,
    FormControl,
    Card,
    CardContent,
    CardHeader
} from '@mui/material';
import { useAuth } from "../../context/authContext";
import { IProfileData } from '../../models/profile.interface'
import FileUpload from '../FileUpload';

function ProfileForm(props: any) {
    const { profile, submitText, submitAction } = props;
    const user = useAuth();

    const [profileData, setProfileData] = React.useState<IProfileData>({
        fullName: '',
        age: '',
        description: '',
        imageURL: '',
        userId: user.user?.uid
    });

    useEffect(() => {
        setProfileData({
            ...profileData, ...profile
        })
    }, [profile]);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProfileData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSave = () => {
        if (profileData.fullName !== '' && profileData.age !== '' && profileData.description !== '') {
            submitAction(profileData);
        } else {
            alert("Please fill all fields!")
        }
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{
                    maxWidth: "400px",
                    backgroundColor: "transparent",
                }}>
                    <CardHeader title={submitText + " profile"}>
                    </CardHeader>
                    <CardContent>
                        <FileUpload productData={profileData} setAvatar={(imageURL: string) => setProfileData({ ...profileData, imageURL: imageURL })} />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="fullName"
                            label="Full Name"
                            type="text"
                            value={profileData.fullName}
                            fullWidth
                            onChange={changeHandler}
                            required
                        />
                        <TextField
                            margin="dense"
                            name="age"
                            label="Age"
                            type="number"
                            value={profileData.age}
                            fullWidth
                            onChange={changeHandler}
                            required
                        />
                        <TextField
                            margin="dense"
                            name="description"
                            label="Description"
                            type="text"
                            value={profileData.description}
                            fullWidth
                            onChange={changeHandler}
                            required
                        />

                        <FormControl sx={{ mt: 1, mb: 0.5 }} fullWidth>
                            <Button
                                variant="contained"
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                        </FormControl>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
}

export default ProfileForm;
