import * as React from 'react';
import UserService from '../../../services/user-service';
import InputMask from 'react-input-mask';
import { Button, Container, IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const EditModal = (props: any) =>
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [userInfo, setUserInfo] = React.useState({ name: '', document: '', birthdate: '' });

    React.useEffect(() => {
        UserService.getCollaborator(props.id)
        .then(({ data }) => setUserInfo({ 
            birthdate: data.birthdate,
            document: data.document,
            name: data.name
        }))
    }, []);

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
        UserService.doUpdateCollaborator(props.id, userInfo).then(() => {
            window.location.reload();
        })
    }

    return (
        <>
            <IconButton aria-label="edit" onClick={handleOpen}>
				<EditIcon />
			</IconButton>

            <Modal open={open} onClose={handleClose}>
                <Container component='main' maxWidth="xs" sx={{ position: 'absolute', top: '20%', left: '35%' }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
                        <Typography component="h1" variant="h5">
                            Edit User
                        </Typography>
                        <Typography>
                            Edit user information. 
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <TextField margin="normal" required fullWidth label="Name" name="name" defaultValue={ userInfo.name } onChange={handleInputChange} />
                            
                            <InputMask
                                mask='999.999.999-99'
                                margin="normal"
                                required 
                                fullWidth 
                                label="Document"
                                name="document"
                                defaultValue={ userInfo.document }
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
                                defaultValue={ userInfo.birthdate }
                                onChange={handleInputChange}
                            >
                                {(inputProps: any) => <TextField {...inputProps} />}
                            </InputMask>
                            
                            <Button type='submit' variant="contained" color="success" fullWidth startIcon={<EditIcon />} sx={{ mt: 2 }} >
                                ATUALIZAR
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
        </>
    )
}

export default EditModal;