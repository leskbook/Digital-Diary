import React ,{useState,useContext,useEffect} from 'react';
import {Grid,Paper,AppBar,Toolbar,Button,TextField} from "@material-ui/core";
import useStyles from "./style";
import API from "../utils/API";
import Header from "./Header";
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import MemoCard from "./memoCard";
const MemoList=()=>{
  const data=[];
  const date=new Date();
  const [holdCard,setholdCard]=useState([]);
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const [pageCount, setPageCount] = React.useState(1);
    const [first,setFirst]=React.useState(false);
    const [filter,setfilter]=React.useState(false);
    const [filterData,setFilterData]=React.useState([]);
    const [check,setCheck]=React.useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handlefilter=async(event, value)=>{
    const date=event.target.value;
    console.log(date);
    const res = await fetch(`http://localhost:5000/data/filter?date=${encodeURIComponent(date)}`,
    {
        method: "GET"
    });
  const  data = await res.json();  
           setFilterData(data);
          
           console.log(data);
           console.log(filterData);
           setCheck(true);
           if(filter)
           {

            setfilter(false);
           }
           else
           {
             
           setfilter(true);
           }
        // })
  }
  useEffect(async()=>{
    console.log("hi")
    if(!check)
    {
    const res = await fetch("http://localhost:5000/data/read",
    {
        method: "GET"
    });
   const  memo = await res.json();  
    setFirst(true);   
    const noOfCards=memo.reverse();
    if(memo.length)
    {
      let noOfPages=Math.floor(memo.length/3);
      let remaning=0;
      if(memo.length%3)remaning=1;
      let totalNoOfPages=noOfPages+remaning;
      setPageCount(totalNoOfPages);
      console.log(totalNoOfPages);
      if(page==1)
      {   
      for(let i=0;i<3;i++)
      {
        if(noOfCards[i])
       data.push(noOfCards[i])
      
      }
      setholdCard(data);                     
      console.log(holdCard);
    }
    else
    {
         const noPage=page;
        if(page==pageCount)
        {
          for(let i=(noPage-1)*3;i<noOfCards.length;i++)
          {
            data.push(noOfCards[i])
          }
        }
        else
        {
      for(let i=(noPage-1)*3;i<=(noPage*3)-1;i++)
      {
        data.push(noOfCards[i])
      }
    }
      setholdCard(data);
    }
    }
  }
    else
    {
      const noOfCards=filterData.reverse();
      if(filterData.length)
      {
        let noOfPages=Math.floor(filterData.length/3);
        let remaning=0;
        if(filterData.length%3)remaning=1;
        let totalNoOfPages=noOfPages+remaning;
        setPageCount(totalNoOfPages);
        console.log(totalNoOfPages);
        if(page==1)
        {   
        for(let i=0;i<3;i++)
        {
          if(noOfCards[i])
         data.push(noOfCards[i])
        
        }
        setholdCard(data);                     
        console.log(holdCard);
      }
      else
      {
           const noPage=page;
          if(page==pageCount)
          {
            for(let i=(noPage-1)*3;i<noOfCards.length;i++)
            {
              data.push(noOfCards[i])
            }
          }
          else
          {
        for(let i=(noPage-1)*3;i<=(noPage*3)-1;i++)
        {
          data.push(noOfCards[i])
        }
      }
        setholdCard(data);
      }
      }
      else
    {
      setholdCard('');
    }
    }
    
  },[page,first,filter]);
    return(
        <div>
         <Header/>
         <Grid container   alignitems="stretch" spacing={0} className={classes.root}>
           <Grid item xs={12} style={{backgroundColor:"white"}}>
         <TextField style={{marginTop:"2px"}}
        id="date"
        label="Search"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true, 
        }}
        onChange={handlefilter}
      />
      </Grid>
         </Grid>            
    <Grid container   alignitems="stretch" spacing={0}>
    {(holdCard.length)?(holdCard.map((data)=>(
                <Grid  item xs={12} sm={12} lg={4}>
                    <MemoCard card={data}></MemoCard>
                    </Grid>) )):(<h1>No Records</h1>)
           }
</Grid>
<footer className={classes.footer}>
         
      <Typography>Page: {page}</Typography>
      <Pagination   id="pagination" count={pageCount} page={page} onChange={handleChange} />
         </footer>
          </div>
    )
}
export default MemoList;