import React ,{useState} from 'react';
import {Grid,Paper,AppBar,Toolbar,Button} from "@material-ui/core";
import useStyles from "./style";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import image from "../images/MainPage.jpg";
import Pagination from '@material-ui/lab/Pagination';
const MemoList=()=>{
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
    return(
        <div>
            <AppBar position="static">
  <Toolbar>
   
    <Button color="inherit">Logout</Button>
    <Typography variant="h6" className={classes.title} style={{marginLeft:"auto"}}>
      UserName
    </Typography>
  </Toolbar>
</AppBar>
                <div className={classes.root} style={{backgroundColor:"white"}}>
      <Typography>Page: {page}</Typography>
      <Pagination count={8} page={page} onChange={handleChange} />
    </div>
        <Grid container  alignitems="stretch" spacing={3}>
        <Grid item  sm={4} >
          <Paper className={classes.paper} style={{margin:"auto",marginTop:"10px"}}>
          <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>       
      </CardActions>
    </Card>
          </Paper>
          </Grid>
          <Grid item  sm={4} >
          <Paper className={classes.paper} style={{margin:"auto",marginTop:"10px"}}>
          <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>       
      </CardActions>
    </Card>
          </Paper>
          </Grid>

          <Grid item  sm={4}>
          <Paper className={classes.paper} style={{margin:"auto",marginTop:"10px"}}>
          <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>       
      </CardActions>
    </Card>
          </Paper>
          </Grid>
          <Grid item sm={4} >
          <Paper className={classes.paper} style={{margin:"auto",marginTop:"10px"}}>
          <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>       
      </CardActions>
    </Card>
          </Paper>
          </Grid>
          </Grid>
          </div>
    )
}
export default MemoList;