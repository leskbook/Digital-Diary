import React,{useState,useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import {Paper,Button} from "@material-ui/core";
import {TextField} from '@material-ui/core';
import useStyles from "./style";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from "moment";
import API from "../utils/API";
import memoryContext from "../utils/memoryContext";
import Slide from '@material-ui/core/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const MemoCard=({card})=>{
  const {newUserfunction}=useContext(memoryContext);
  const [openCard,setOpenCard]=useState();
  const [updateTitle,setUpdateTitle]=useState();
  const [cardID,setCardID]=useState();
  const [updateDesc,setUpdateDesc]=useState();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteCard, setDeleteCard] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDelete =() => {
   
    setDeleteCard(true);
};
    
const handleDelete = async() => {
  await API.deleteMemories(card.id)
  .then((data) => {
      console.log(data);
  window.location.href="/list";
})  
  };

  const handleCloseDelete = () => {
    setDeleteCard(false);
  };

  const handleSucessesClose = () => {
    setSuccess(false);
  };
  const handleCardOpen = () => {
  setCardID(card.id);  
  setUpdateTitle(card.title);
  setUpdateDesc(card.description);
    setOpenCard(true);
  };

  const handleCardClose = () => {
    setOpenCard(false);
  };
  const handleCardSave = async() => {
    setSuccess(true);
    console.log(cardID);
    const memories = {
      title: updateTitle,
      description: updateDesc,
      id: cardID
  }  
  await API.updateMemories(memories)
      .then((data) => {
          console.log(data);
          newUserfunction();
      window.location.href="/list";
    setOpenCard(false);
  })
}
    const classes = useStyles();
  
    let image=card.imageurl;
    let date=moment(card.createdAt).format("DD-MM-YYYY");
    return(
        <div>
          <Dialog 
        open={deleteCard}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Are You Sure?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDelete} color="primary">
            Yes
          </Button>
          <Button onClick={handleCloseDelete} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
         <Paper className={classes.paper} style={{margin:"auto",marginTop:"10px",width:"300px"}}>
          <Card className={classes.root}>
      <CardHeader id="readTitle" style={{color:"blue"}}
        action={
          <div>
          <IconButton aria-label="settings" >
            <EditIcon  onClick={handleCardOpen}/>
          </IconButton>
          <IconButton aria-label="settings" >
          <DeleteForeverIcon onClick={handleClickDelete}/>
        </IconButton>
        </div>
        }
        title={card.title}
        subheader={date}
      />
      <Dialog id={cardID}
      TransitionComponent={Transition}
        open={openCard}
        onClose={handleCardClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Update
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <TextField  value={updateTitle} onChange={(e)=>{setUpdateTitle(e.target.value)}} className={classes.input} name="Caption" variant="outlined" label="Caption" fullWidth />
          <TextField value={updateDesc} onChange={(e)=>{setUpdateDesc(e.target.value)}}  className={classes.input} name="Description" variant="outlined" label="description" fullWidth />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCardClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCardSave} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
          <TextField  style={{display:"none"}} id="createTitle" value={card.title} className={classes.input} name="Title" variant="outlined" label="Caption"  />

      <CardMedia><img onClick={handleClickOpen} className={classes.media} alt="Main image" src={image}/></CardMedia>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        
        <DialogContent dividers>
        <img onClick={handleClickOpen} className={classes.media1} src={image} alt="Main image"/>
        </DialogContent>
      </Dialog>
      <Dialog onClose={handleSucessesClose} aria-labelledby="customized-dialog-title" open={success}>
        
        <DialogContent dividers>
        SuccessFully Updated
        </DialogContent>
      </Dialog>
      <CardContent>
        <Typography className={classes.scrollBox} id="readDescreption" variant="body2" color="textSecondary">
         {card.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>       
      </CardActions>
    </Card>
          </Paper>
        </div>
    )
}

export default MemoCard;