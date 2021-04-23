import React, { useState ,useContext} from 'react';
import API from "../utils/API";
import {Grid,Paper,Typography,TextField,Button,AppBar,Toolbar} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./style";
import image from "../images/MainPage.jpg";
import {useHistory} from "react-router-dom";
import memoryContext from "../utils/memoryContext";
const Search=()=>{
  const {newUserfunction}=useContext(memoryContext);
    const history= useHistory();
    const classes = useStyles();
    const [uploadImage,setUploadImage]=useState();
    const [image,setImage]=useState('');
    const [title,setTitle]=useState();
    const [description,setDescription]=useState();    
    const [imageurl, setImageurl] = useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(image);
        const data=new FormData();
        data.append('file',image);
        data.append('upload_preset',"Amita123");
        const res = await fetch("https://api.cloudinary.com/v1_1/duiqykyxv/image/upload",
            {
                method: "POST",
                body: data
            });
            const files = await res.json();  
            
        setImageurl(files.secure_url);
        console.log(files.secure_url);
        const memories = {
            title: title,
            description: description,
            imageurl: files.secure_url
        }  
        console.log(memories);
        await API.createMemories(memories)
            .then((data) => {
                console.log(data);
                newUserfunction();
        history.push({pathname:"/list",
            })
    })  
    
    const handleUploadImage=()=>{
       
        if(uploadImage)
        document.getElementById("imagePreview").className=classes.ImagePreview
    }
    }
return(
<div className={classes.root}>
<AppBar position="static">
  <Toolbar>
   
    <Button color="inherit">Logout</Button>
    <Typography variant="h6" className={classes.title} style={{marginLeft:"auto"}}>
      UserName
    </Typography>
  </Toolbar>
</AppBar>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>  <TextField  style={{marginTop:"-15px"}}
        id="date"
        label="Search"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /></Paper>
        </Grid>
        <Grid   item xs={12} style={{height:"500px",marginTop:"30px"}}>
        <Paper className={classes.paper}  style={{width:"50%",margin:"auto"}}>
    <form autoComplete="off"  onSubmit={handleSubmit} noValidate className={classes.form}>
    <Typography varient="h6" >Create a Memory</Typography>
     <TextField value={title} onChange={(e)=>{setTitle(e.target.value)}} className={classes.input} name="Caption" variant="outlined" label="Caption" fullWidth />
     <TextField value={description} onChange={(e)=>{setDescription(e.target.value)}} className={classes.input} name="message" variant="outlined" label="Message" fullWidth/>
         <div className={classes.fileInput}>
         <img id="imagePreview"   style={{display:"none",width:"100px",height:"100px"}} src={uploadImage} alt="" />
    <input type="file" multiple={false} onChange={(event)=>{setImage(event.target.files[0]);if(event.target.files[0]) { setUploadImage(URL.createObjectURL(event.target.files[0])); console.log("image",event.target.files[0]); 
        
        document.getElementById("imagePreview").style.display="block";
    }
    else
    {
        document.getElementById("imagePreview").style.display="none";
    }}}/>
    <Button type="submit" className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>    
    <Button  variant="contained" color="secondary" size="large"  fullWidth>Clear</Button>    

    </div>
    </form>
</Paper>
        </Grid>
      </Grid>
    </div>
)

}

export default Search;