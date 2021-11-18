import React from 'react'
import { useLogin, defaultTheme,createMuiTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

export const LoginScreen = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    
    
    const submit = e => {
        e.preventDefault();

        login({ username:email, password }).catch((e) =>
            console.log(e)
        );
    };
    
    return (
        <ThemeProvider theme={createMuiTheme(defaultTheme)}>
            <Grid container xs={12} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius:17,
                    paddingX:5,
                    paddingY:5
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main',marginTop:5, marginBottom:10}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{marginTop:5}}>
                    Iniciar Sesion
                </Typography>
                <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo Electronico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange = {e => setEmail(e.target.value)}
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange = {e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recordarme"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    o
                    >
                    Ingresar
                    </Button>
                    <Grid container style={{marginTop:10}}>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Recuperar contraseña 
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Registrarse"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
         </Grid>
        </ThemeProvider>
    )
}
