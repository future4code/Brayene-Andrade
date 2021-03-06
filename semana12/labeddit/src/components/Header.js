import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { goToFeed } from '../routes/cordinator';
import { goToLogin } from '../routes/cordinator';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({rightButtonText, setRightButtonText}) => {
  const classes = useStyles();
  const token = localStorage.getItem("token")
  const history = useHistory();
  
  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token){
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    } else{
      goToLogin(history)
    }

  }



  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Button onClick={() => goToFeed (history)} color="inherit">LabEddit</Button>
          </Typography>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </Toolbar>
      </AppBar>
  );
}

export default Header 