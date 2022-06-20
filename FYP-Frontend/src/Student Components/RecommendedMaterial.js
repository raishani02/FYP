import React from "react";
import StudentMenu from "./StudentMenu";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const RecommendedMaterial = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
};      
    
    return (
      <div>
      <StudentMenu />  
      <div>
        <Button variant= "outlined" color= "primary"  style={{marginTop: 120, marginLeft:350, height:100}} onClick={handleClickOpen}>
          <b>Quiz-1 Recommendations and Feedback </b>
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
             Hello Minahil!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p style={{ color: "yellow", fontSize:18 , fontWeight:600 }}> Quiz Details</p>  
              Difficulty Level : Medium
              <br />
              Total Marks: 20
              <br />
              Obtained Marks: 15
              <br />
              Percentage: 75%
              <br />
              <br />
              
              <p style={{ color: "dark gray", fontSize:18 , fontWeight:600 }}>Feedback</p> 
              Perfomance: Good
              <br />
              Badge Awarded: Gold  
              <br />                    
              <br />
              <p style={{ color: "dark gray", fontSize:18 , fontWeight:600, height:100 }}>Recommendations</p> 
              Based on Your Performance, following are the Advanced Recommended Material links for further practice:
              <br />
              <br />
              <a target="_blank" href="https://www.w3schools.com/sql/sql_null_values.asp"> Null Values Reading, Examples and Pratice Question</a>
              <br />
              <a target="_blank" href="https://www.tutorialspoint.com/sql/sql-null-values.htm"> Another Reading of NULL values</a>
              <br />
              <a target="_blank" href="https://www.sqlshack.com/working-with-sql-null-values/">Detailed Article on NULL values</a>
              <br />
              <br />
              <p style={{ color: "yellow", fontSize:18 , fontWeight:600 }}>Happy Learning :)</p> 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
             Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Button variant= "outlined" color= "primary"  style={{marginTop: 50, marginLeft:350,height:100}} onClick={handleClickOpen}>
          <b>Quiz-2 Recommendations and Feedback  </b>
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
             Hello Minahil!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p style={{ color: "dark gray", fontSize:18 , fontWeight:600 }}>Quiz Details</p>  
              
              Difficulty Level : Medium
              <br />
              Total Marks: 20
              <br />
              Obtained Marks: 15
              <br />
              Percentage: 75%
              <br />
              <br />
              
              <p style={{ color: "dark gray", fontSize:18 , fontWeight:600 }}>Feedback</p> 
              Perfomance: Good
              <br />
              Badge Awarded: Gold  
              <br />                    
              <br />
              <p style={{ color: "dark gray", fontSize:18 , fontWeight:600 }}>Recommendations</p> 
              Based on Your Performance, following are the Advanced Recommended Material links for further practice:
              <br />
              <br />
              <a target="_blank" href="https://www.w3schools.com/sql/sql_null_values.asp"> Null Values Reading, Examples and Pratice Question</a>
              <br />
              <a target="_blank" href="https://www.tutorialspoint.com/sql/sql-null-values.htm"> Another Reading of NULL values</a>
              <br />
              <a target="_blank" href="https://www.sqlshack.com/working-with-sql-null-values/">Detailed Article on NULL values</a>
              <br />
              <br />
              <p style={{ color: "#161a59", fontSize:18 , fontWeight:600 }}>Happy Learning :)</p> 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
             Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Button variant= "outlined" color= "primary"  style={{marginTop: 50, marginLeft:320,height:100}} onClick={handleClickOpen}>
          <b>Assignment-1 Recommendations and Feedback </b>
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
             Hello Minahil!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p style={{ color: "dark gray", fontSize:18 , fontWeight:600 }}>Assessment Details</p>  
              
              Difficulty Level : Medium
              <br />
              Total Marks: 20
              <br />
              Obtained Marks: 15
              <br />
              Percentage: 75%
              <br />
              <br />
              
              <p style={{ color: "dark gray", fontSize:18 , fontWeight:600 }}>Feedback</p> 
              Perfomance: Good
              <br />
              Badge Awarded: Gold  
              <br />                    
              <br />
              <p style={{ color: "dark gray", fontSize:18 , fontWeight:600 }}>Recommendations</p> 
              Based on Your Performance, following are the Advanced Recommended Material links for further practice:
              <br />
              <br />
              <a target="_blank" href="https://www.w3schools.com/sql/sql_null_values.asp"> Null Values Reading, Examples and Pratice Question</a>
              <br />
              <a target="_blank" href="https://www.tutorialspoint.com/sql/sql-null-values.htm"> Another Reading of NULL values</a>
              <br />
              <a target="_blank" href="https://www.sqlshack.com/working-with-sql-null-values/">Detailed Article on NULL values</a>
              <br />
              <br />
              <p style={{ color: "#161a59", fontSize:18 , fontWeight:600 }}>Happy Learning :)</p> 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
             Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      
      </div>
    );
 }
    
export default RecommendedMaterial;
