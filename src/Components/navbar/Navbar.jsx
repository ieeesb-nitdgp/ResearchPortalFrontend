/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import {
  Toolbar,
  AppBar,
  IconButton,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LoginIcon from '@material-ui/icons/Login';
import LogoutIcon from '@material-ui/icons/Logout';
import MenuIcon from '@material-ui/icons/Menu';
import FlagIcon from '@material-ui/icons/Flag';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import rp from '../../Assets/research_portal_cropped.png';
import Logow from '../../Assets/ieeesb_logowhite.png';
import Logob from '../../Assets/ieeesb_logoblue.png';
import { colors } from '../theme/Theme';
import logout from '../../Redux/Actions/logout';

const useStyle = makeStyles((theme) => ({
  root: {
    marginBottom: '10px',
    // padding: '3px',
    position: 'sticky',
    top: '0',
    zIndex: '2',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  bg: {
    backgroundColor: colors.navBg,
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
  logo_container: {
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      width: '30%',
    },
    position: 'relative',
  },
  grow: {
    flexGrow: '1',
  },
  button_container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    justifyContent: 'flex-end',
    width: 'min-content',
  },
  block: {
    display: 'block',
  },
  logo2: {
    width: '100px',
    position: 'absolute',
    right: '0',
    top: '-25px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logo1: {
    // filter: 'invert(1)',
    padding: '5px 0',
    width: '35%',
    minWidth: '100px',
    [theme.breakpoints.down('xs')]: {
      width: '60%',
    },
  },
  button: (props) => ({
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
    color: colors.navText,
    fontSize: '15px',

    '&:hover': {
      color: colors.navText,
    },
  }),
  logout: (props) => ({
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
    color: colors.navText,
    backgroundColor: '#ff4837',
    fontSize: '15px',

    '&:hover': {
      color: colors.navText,
      backgroundColor: '#fb0000',
    },
  }),
  login: (props) => ({
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
    color: colors.navText,
    backgroundColor: '#009900',
    fontSize: '15px',

    '&:hover': {
      color: colors.navText,
      backgroundColor: '#007f00',
    },
  }),
  menu_container: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexGrow: '1',
      justifyContent: 'flex-end',
    },
  },
  menu_icon: (props) => ({
    color: 'white',
    fontSize: '3rem',
  }),
  drawer_logo_container: {
    positon: 'relative',
    width: '100%',
    padding: '10px',
    marginBottom: '50px',
  },
  drawer_logo: {
    width: '80%',
    position: 'absolute',
    left: '0',
    top: '0',
  },
}));

export default function Navbar() {
  const [isOpen, toggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const state = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    window.onscroll = () => {
      setScroll(
        document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
      );
    };
  }, []);

  const classes = useStyle();

  const history = useHistory();
  function pushTo(path) {
    history.push(path);
    toggle(false);
  }

  return (
    <div className={clsx(classes.root, { [classes.bg]: scroll })}>
      <AppBar position="none" color="transparent" elevation="0">
        <Toolbar>
          <div className={classes.logo_container}>
            <Link to="/">
              <img src={rp} alt="logo" className={classes.logo1} />
            </Link>
          </div>

          <div style={{ flexGrow: '1' }} className={classes.button_container}>
            <Button
              component={Link}
              to="/milestones"
              className={classes.button}
            >
              Milestone
            </Button>
            <Button component={Link} to="/team" className={classes.button}>
              Team
            </Button>
            {state.isLogged && (
              <Button
                component={Link}
                to="/dashboard"
                className={classes.button}
              >
                Dashboard
              </Button>
            )}
            <Button component={Link} to="/about-us" className={classes.button}>
              About us
            </Button>
            {state.isLogged ? (
              <Button
                onClick={() => {
                  dispatch(logout());
                }}
                className={classes.logout}
              >
                LOGOUT
              </Button>
            ) : (
              <Button component={Link} to="/login" className={classes.login}>
                LOGIN
              </Button>
            )}
          </div>
          <div className={classes.logo_container}>
            <a href="https://www.ieeesbnitdgp.com/">
              <img src={Logow} alt="ieeelogo" className={classes.logo2} />
            </a>
          </div>
          <div className={classes.menu_container}>
            <IconButton
              onClick={() => {
                // ('console.logclicked');
                toggle(true);
              }}
            >
              <MenuIcon className={classes.menu_icon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isOpen} onClose={() => toggle(false)}>
        <List>
          <ListItem>
            <div className={classes.drawer_logo_container}>
              <a href="https://www.ieeesbnitdgp.com/">
                <img src={Logob} alt="logo" className={classes.drawer_logo} />
              </a>
            </div>
          </ListItem>
          <ListItem style={{ paddingTop: '10px' }} divider button>
            <ListItemIcon>
              <FlagIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                pushTo('/milestones');
              }}
            >
              MileStones
            </ListItemText>
          </ListItem>
          <ListItem style={{ paddingTop: '10px' }} divider button>
            <ListItemIcon>
              <PeopleIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                pushTo('/team');
              }}
            >
              Team
            </ListItemText>
          </ListItem>
          {state.isLogged && (
            <ListItem style={{ paddingTop: '10px' }} divider button>
              <ListItemIcon>
                <DashboardIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                onClick={() => {
                  pushTo('/dashboard');
                }}
              >
                Dashboard
              </ListItemText>
            </ListItem>
          )}
          <ListItem style={{ paddingTop: '10px' }} divider button>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                pushTo('/about-us');
              }}
            >
              About Us
            </ListItemText>
          </ListItem>
          {state.isLogged ? (
            <ListItem style={{ paddingTop: '10px' }} divider button>
              <ListItemIcon>
                <LoginIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </ListItemText>
            </ListItem>
          ) : (
            <ListItem style={{ paddingTop: '10px' }} divider button>
              <ListItemIcon>
                <LogoutIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                onClick={() => {
                  history.push('/login');
                }}
              >
                Login
              </ListItemText>
            </ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
}
