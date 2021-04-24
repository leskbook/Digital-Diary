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
   
    <Button color="inherit">Logout</Button>
     <div style={{float:"initial"}}><HomeIcon/>         <AddBoxIcon/></div> 
    <Typography variant="h6" className={classes.title} style={{marginLeft:"auto"}}>
      UserName
    </Typography>
  </Toolbar>
</AppBar>
    </div>
)
}

export default Header;