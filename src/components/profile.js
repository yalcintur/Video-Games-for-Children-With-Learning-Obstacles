import React, { useEffect, useState, useContext } from 'react';
import { Typography, Paper, useMediaQuery, Stack, Button, Box, Divider, FormControl, Card, CardContent, Grid, CardActions, ListItemIcon, Select, MenuItem, InputLabel, Dialog, AppBar, Toolbar, List, ListItem, ListItemText, IconButton, Slide, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { UserContext } from '../contexts/user.context';
import { updateUser} from '../utils/firebase/firebase.utils';
import { Link, useNavigate } from 'react-router-dom';
import {
    auth,
} from "../utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: 'primary.main',
    elevation: 0,
    border: '2px solid gray',
    minHeight: 200,
    maxHeight: 700,
    width: 500,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'start',
    alignItems: 'start',
    display: 'flex',
    overflow: 'auto',
    [theme.breakpoints.down('md')]: {
        width: 450,
    }
}));

const StyledPaperFr = styled(Paper)(({ theme }) => ({
    backgroundColor: 'primary.main',
    elevation: 0,
    border: '2px solid gray',
    minHeight: 200,
    maxHeight: '100%',
    width: 500,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    overflow: 'auto',
    [theme.breakpoints.down('md')]: {
        width: 450,
    }
}));

const StyledPaperDialog = styled(Paper)(({ theme }) => ({
    backgroundColor: 'primary.main',
    elevation: 0,
    border: '2px solid gray',
    minHeight: 200,
    maxHeight: '100%',
    width: 700,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    overflow: 'auto',
    [theme.breakpoints.down('md')]: {
        width: 450,
    }
}));
const StyledStack = styled(Stack)(({ theme }) => ({

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Profile() {


    const { currentUser } = useContext(UserContext)

    const [user, loading, error] = useAuthState(auth);
    const [students, setStudents] = useState([]);
    const [qList, setQList] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (!user) navigate("/login");
    }, [user, loading]);


    let userDetails = '';
    if (typeof (currentUser) !== 'undefined') {
        userDetails = currentUser;
    }


    const [value, setValue] = useState();
    const [open, setOpen] = React.useState(false);
    const [opentwo, setOpenTwo] = React.useState(false);

    const [selectValue, setSelectValue] = React.useState(userDetails.typeOrder)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseTwo = () => {
        setOpenTwo(false);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        await updateUser(userDetails.uid, data.get('parentname'), data.get('childname'), selectValue, data.get('city'), data.get('telefon')); 
        window.location.reload();
    };

    const handleChange = (event) => {
        setSelectValue(event.target.value);
        console.log(userDetails.email);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'studentName', headerName: 'Öğrenci Adı', width: 130 },
        { field: 'studentId', headerName: 'Özel Kodu', width: 130 },

    ]
    const rows = [
    ];
    let counter = 1;

    if (userDetails.roles === 'teacher') {
        for (let i = 0; i < userDetails.students.length; i++) {
            rows.push({ id: counter, studentName: userDetails.studentName[i], studentId: userDetails.students[i] });
            counter++;
        }
    }


    const Form = (
        <React.Fragment>
            <Stack component="form" id="userformdata" onSubmit={handleSubmit} sx={{ alignItems: 'center' }}>
                <StyledPaperFr>
                    <Stack direction="column" sx={{ alignItems: 'center' }}>
                        <Stack sx={{ alignItems: 'center' }}>
                            <Typography variant="h5" sx={{ m: 2 }}>Kişisel Bilgilerin</Typography>
                            <Avatar sx={{ height: 50, width: 50, mb: 4, border: '2px solid gray' }}></Avatar>
                        </Stack>
                        <Stack sx={{ alignItems: 'center' }}>
                            <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                                <Typography variant="h7">İsim</Typography>
                            </Box>
                            <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start', mb: 3, mt: 1 }}>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    required
                                    name="childname"
                                    id="outlined-required"
                                    label=""
                                    defaultValue={userDetails.nameofChild}
                                />
                            </Box>
                        </Stack>
                        <Stack sx={{ alignItems: 'center' }}>
                        <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h7">Veli İsmi</Typography>
                        </Box>
                        <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start', mb: 3, mt: 1 }}>
                            <TextField
                                sx={{ width: '50ch' }}
                                required
                                name="parentname"
                                id="outlined-required"
                                label=""
                                defaultValue={userDetails.nameofParent}
                            />
                        </Box>
                    </Stack>
                        <Stack sx={{ alignItems: 'center' }}>
                            <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                                <Typography variant="h7">Email</Typography>
                            </Box>
                            <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start', mb: 3, mt: 1 }}>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    required
                                    id="outlined-required"
                                    label=""
                                    defaultValue={userDetails.email}
                                />
                            </Box>
                        </Stack>
                        <Stack sx={{ alignItems: 'center' }}>
                            <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                                <Typography variant="h7">Telefon Numarası</Typography>
                            </Box>
                            <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start', mb: 3, mt: 1 }}>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    required
                                    name="telefon"
                                    id="outlined-required"
                                    label=""
                                    defaultValue={userDetails.telephone}
                                />
                            </Box>
                        </Stack>
                        <Stack sx={{ alignItems: 'center' }}>
                            <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                                <Typography variant="h7">Şehir</Typography>
                            </Box>
                            <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start', mb: 3, mt: 1 }}>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    required
                                    id="outlined-required"
                                    label=""
                                    name="city"
                                    defaultValue={userDetails.city}
                                />
                            </Box>
                        </Stack>
                        <Stack sx={{ alignItems: 'center' }}>
                            <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                                <Typography variant="h7">Öğrenme Güçlüğü</Typography>
                            </Box>
                            <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start', mb: 5, mt: 1 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Öğrenme Güçlüğü</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={selectValue}
                                        defaultValue={selectValue}
                                        label="Öğrenme Güçlüğü"
                                        displayEmpty
                                        onChange={handleChange}
                                    >
                                    <MenuItem value={"Otizm"}>Otizm</MenuItem>
                                    <MenuItem value={"Down Sendromu"}>Down Sendromu</MenuItem>
                                    <MenuItem value={"Disleksi"}>Disleksi</MenuItem>
                                    <MenuItem value={"Disgrafi"}>Disgrafi</MenuItem>
                                    <MenuItem value={"Diskalkuli"}>Diskalkuli</MenuItem>
                                    <MenuItem value={"Afazi"}>Afazi</MenuItem>
                                    <MenuItem value={"Diğer"}>Diğer</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Stack>
                        <Button color="secondary" autoFocus sx={{ color: 'white', display: 'flex', borderRadius: 3 }} variant="contained" type="submit" onClick={handleClose}>
                            Kaydet
                        </Button>
                    </Stack>
                </StyledPaperFr>
            </Stack>
        </React.Fragment>
    );

    const DialogDesign = (
        <React.Fragment>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: 'white' }} variant="h6" component="div">
                            Kişisel Bilgilerin
                        </Typography>
                        <Button autoFocus sx={{ color: 'white', display: 'flex' }} onClick={handleClose}>
                            Kaydet
                        </Button>
                    </Toolbar>
                </AppBar>

                {Form}
            </Dialog>
        </React.Fragment>
    );



    const kisiselBilgi = (
        <Stack sx={{ alignItems: 'center' }}>
            <StyledPaperFr>
                <Stack sx={{ alignItems: 'center' }}>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Typography variant="h4" sx={{ m: 3, color: 'primary.main' }} >Merhaba {userDetails.name}</Typography>
                        <Typography variant="h5" sx={{ m: 2 }}>Kişisel Bilgilerin</Typography>
                        <Avatar sx={{ height: 50, width: 50, mb: 4, border: '2px solid gray' }}></Avatar>
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h7">İsim</Typography>
                        </Box>
                        <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h6">{userDetails.nameofChild}</Typography>
                        </Box>
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }}>
                    <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                        <Typography variant="h7"> Veli İsmi</Typography>
                    </Box>
                    <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start' }}>
                        <Typography variant="h6">{userDetails.nameofParent}</Typography>
                    </Box>
                </Stack>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h7">Email</Typography>
                        </Box>
                        <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h6">{userDetails.email}</Typography>
                        </Box>
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h7">Telefon Numarası</Typography>
                        </Box>
                        <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h6">{userDetails.telephone}</Typography>
                        </Box>
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h7">Şehir</Typography>
                        </Box>
                        <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h6">{userDetails.city}</Typography>
                        </Box>
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Box sx={{ width: 300, height: 20, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h7">Öğrenme Güçlüğü</Typography>
                        </Box>
                        <Box sx={{ width: 300, height: 40, display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="h6" noWrap>{userDetails.typeOrder}</Typography>
                        </Box>
                    </Stack>
                    <Button variant="contained" color="secondary" onClick={handleClickOpen} sx={{ color: 'white', mt: 3, mb: 3, borderRadius: 3 }}>Güncelle</Button>
                    {DialogDesign}
                </Stack>
            </StyledPaperFr>
        </Stack>
    );

    const theme = useTheme();
    let teacherCheck = false;
    if (userDetails.roles === 'teacher') {
        teacherCheck = true;
    }
    if (user) {
        return (
            <React.Fragment>
                <StyledStack direction={{ xl: 'row', lg: 'row', sm: 'column', xs: 'column' }} spacing={3} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    {kisiselBilgi}
                </StyledStack>
            </React.Fragment>)
    }
    else {
        return (<Typography sx={{ color: 'white' }}>Selam</Typography>);
    }

}

