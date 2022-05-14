import * as React from 'react';
import UserService from '../../../services/user-service';

import { Button, Container, Modal, Paper, Typography, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import InputMask from 'react-input-mask';

const AddModal = () =>
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [userInfo, setUserInfo] = React.useState({ name: '', birthdate: '', document: '' });

    const handleInputChange = (e: any) => 
    {
        const { name, value } = e.target;
        if (name == 'name')
        {
            setUserInfo(
            {
                ...userInfo,
                'name': value,
            });  
        }
        else
        {
            setUserInfo(
            {
                ...userInfo,
                [name]: value,
            });
        }
    };

    const handleSubmit = (event: any) =>
    {
        event.preventDefault();
        UserService.doAddCollaborator(userInfo).then((res) => {
            window.location.reload();
        })
    }

    return (
        <div> 
            <Button size='medium' startIcon={ <AddIcon /> } color='primary' variant='contained' sx={{ mt: 3, mb: 3 }} onClick={handleOpen} >
                ADD USERS
            </Button>

            <Modal open={open} onClose={handleClose}>
                <Container component='main' maxWidth="xs" sx={{ position: 'absolute', top: '20%', left: '35%' }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
                        <Typography component="h1" variant="h5">
                            Add User
                        </Typography>
                        <Typography>
                            Input user information. 
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <TextField margin="normal" required fullWidth label="Name" name="name" onChange={handleInputChange} />

                            <InputMask
                                mask='999.999.999-99'
                                margin="normal"
                                required 
                                fullWidth 
                                label="Document"
                                name="document"
                                onChange={handleInputChange}
                            >
                                {(inputProps: any) => <TextField {...inputProps} />}
                            </InputMask>

                            <InputMask
                                mask='9999-99-99'
                                margin="normal"
                                required 
                                fullWidth 
                                label="Birthdate"
                                name="birthdate"
                                onChange={handleInputChange}
                            >
                                {(inputProps: any) => <TextField {...inputProps} />}
                            </InputMask>

                            <Button type='submit' variant="contained" color="success" fullWidth startIcon={<AddIcon />} sx={{ mt: 2 }} >
                                Adicionar
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
        </div>
    )
}

export default AddModal;