import React from 'react';
//Styles
import { Wrapper, MenuSection } from './styles';
//Material UI STUff
// Menu
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
//Icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

export default function Menu() {

    const classes = useStyles();

    return (
        <Wrapper>
            <MenuSection>
                <Tooltip title="Home">
                    <IconButton aria-label="Home">
                        <HomeOutlinedIcon className={classes.iconsMenu}  />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Friends">
                    <IconButton aria-label="Friends">
                        <Badge badgeContent={2} color="error">
                            <PeopleOutlineOutlinedIcon className={classes.iconsMenu} />
                        </Badge>
                    </IconButton>
                </Tooltip>  
                <Tooltip title="Notifications">
                    <IconButton aria-label="Notifications">
                        <Badge badgeContent={4} color="error">
                            <NotificationsOutlinedIcon className={classes.iconsMenu} />
                        </Badge>
                    </IconButton>
                </Tooltip>
            </MenuSection>
        </Wrapper>
    )
}

const useStyles = makeStyles({
    iconsMenu: {
        color: '#fff'
    }
})