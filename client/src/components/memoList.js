import React, { useState } from 'react';
import { Grid, AppBar, Toolbar, Button } from "@material-ui/core";
import useStyles from "./style";
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import MemoCard from "./memoCard";
import Header from "./Header";
const MemoList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
     <Header/>
      <Grid container style={{marginTop:"30px"}} alignitems="stretch" spacing={3}>

        {([1, 2, 3]).map((ele) => <MemoCard />)}
      </Grid>
      <div className={classes.footer}>
        <Typography>Page: {page}</Typography>
        <Pagination count={8} page={page} onChange={handleChange} />
      </div>
    </div>
  )
}
export default MemoList;