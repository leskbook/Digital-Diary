import React from 'react';
import {Grid,Paper,Typography,TextField,Button,AppBar,Toolbar} from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import useStyles from "./style";
import AddBoxIcon from '@material-ui/icons/AddBox';
const Header=()=>{
    const classes = useStyles();

return(
    <div className={classes.root}>
<AppBar position="static" fullWidth>
  <Toolbar>  
  <a href="/"  style={{color:"white",marginRight:"10px",fontWeight:"bold",textDecoration:"none"}} alt="List">Logout</a>
     <div style={{float:"initial"}}><a href="/list" alt="List"><HomeIcon style={{color:"white"}}/>   </a><a href="/search"><AddBoxIcon  style={{color:"white"}}/></a></div> 
    <Typography variant="h6" className={classes.title} style={{marginLeft:"auto"}}>
      myDiary@gmail.com
    </Typography>
  </Toolbar>
</AppBar>
    </div>
)
}

export default Header;