import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    Button,
    Box,
    Container,
    Avatar
} from "@mui/material";
import Edit from '@mui/icons-material/Edit';

const ProfileShow = (props: any) => {
    const { profile, profileId } = props;
    return (
        <Container>
            <Box sx={{ mt: 5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{
                        maxWidth: "400px",
                        backgroundColor: "transparent",
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar
                                    alt={profile.fullName}
                                    src={profile.imageURL}
                                    sx={{ width: 200, height: 200 }}
                                />
                            </Box>
                            <Box sx={{ mt: 5, fontSize: '20px', fontFamily: 'monospace', color: "#2F4F4F" }}>
                                <div style={{ width: '100%', wordBreak: "break-word" }}>
                                    <span style={{ fontWeight: "bold" }}>Full Name</span>: {profile.fullName}
                                </div>
                                <hr />
                                <div style={{ width: '100%', wordBreak: "break-word" }}>
                                    <span style={{ fontWeight: "bold" }}>Age</span>: {profile.age}
                                </div>
                                <hr />
                                <div style={{ width: '100%', wordBreak: "break-word" }}>
                                    <span style={{ fontWeight: "bold" }}>Description</span>: {profile.description}
                                </div>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'right', mt: 4 }}>
                                <Link to={`/profile/edit/${profileId}`}>
                                    <Button variant="outlined">
                                        <Edit></Edit>
                                    </Button>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

        </Container>
    )
};

export default ProfileShow;
