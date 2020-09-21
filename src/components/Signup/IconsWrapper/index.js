import React from 'react';
//Styles
import { IconsWrapper } from './styles';
//MUI STUff
import IconButton from '@material-ui/core/IconButton';

//Icons
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

export default function IconsSection({ classes }) {
    return (
        <IconsWrapper>
            <IconButton aria-label="Youtube" className={classes.buttonIncon}>
                <YouTubeIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Facebook" className={classes.buttonIncon}>
                <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Twitter" className={classes.buttonIncon}>
                <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Email" className={classes.buttonIncon}>
                <EmailIcon fontSize="small" />
            </IconButton>
        </IconsWrapper>
    )
}
