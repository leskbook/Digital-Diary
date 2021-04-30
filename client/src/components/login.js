import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import image from "../images/DigitalDiary2.png";
import API from "../utils/loginAPI";
const useStyles = makeStyles((theme) => ({
  paper: {
    width: "80%",
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: "black",
    backgroundColor: 'white',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '10%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    float: 'left',
    height: '150px',
    marginTop: '20px',
    marginLeft: '20px',
  },

}));

export default function SignIn() {
  const [signupUserName,setSignUpUserName]=useState();
const [signupEmail,setSignUpEmail]=useState();
const [signupPassword,setSignUpPassword]=useState();
const [loginEmail,setloginEmail]=useState();
const [loginPassword,setloginPassword]=useState();
const history=new useHistory();
const handleformSubmit=()=>{
const signUp={
  username:signupUserName,
  password:signupPassword,
  email:signupEmail
}
API.signup(signUp)
    .then(()=>{
      document.getElementById("spanTitle").style.display="none";
      console.log("Successfull signup")
    })
    .catch((err)=>{
     
            document.getElementById("spanTitle").style.display="block";
    })
}
const handleformLoginSubmit=async(e)=>{
  e.preventDefault();
  const login={
    password:loginPassword,
    email:loginEmail
  }
 await API.login(login)
  .then((data)=>{
    console.log("the result is",data)
    history.push({pathname:"/list",
    state:{username:data.data.username, id:data.data.id}
})    
       })
  }

  const classes = useStyles();
const imageOne = image;
console.log(imageOne)
  return (
    <div >
          <img className={classes.logo}
        src={imageOne}
        title="Logo"
      />
         <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleformLoginSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
            value={loginEmail}
            onChange={(e)=>{setloginEmail(e.target.value)}}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={loginPassword}
            onChange={(e)=>{setloginPassword(e.target.value)}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
      </Grid>
      <Grid item xs={12} sm={6}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleformSubmit}> 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={signupUserName}
            onChange={(e)=>{setSignUpUserName(e.target.value)}}
          />
          <div style={{ width: "100%", height: "20px" }}><span style={{display:"none"}} id="spanTitle">Email already exist</span></div>
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={signupEmail}
            onChange={(e)=>{setSignUpEmail(e.target.value)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"  value={signupPassword}
            onChange={(e)=>{setSignUpPassword(e.target.value)}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      </Grid>
      </Grid>
   
      </div>     
  );
}
