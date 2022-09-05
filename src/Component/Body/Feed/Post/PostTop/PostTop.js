import React from 'react';
import './PostTop.css';
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { FaBookmark, FaFlag, FaGlobe, FaTrashAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { ImLink } from 'react-icons/im';
import styled from '@emotion/styled';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import {user} from '../../../../../data/data';



const PostTop = ({date, first_name, last_name}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="post-top">
            <div className="post-top-left d-flex">
                <Avatar className='post-profile-img' alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} />
                <div>
                    <p className="post-user-name p-0 m-0">{first_name} {last_name}</p>
                    <p className="post-date p-0 m-0 me-2">{date}<FaGlobe className='ms-1'/></p>
                </div>
            </div>
            <div className="post-top-right">
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <FiChevronDown className='post-top-right-menu-button' />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <FaBookmark className='post-top-right-menu-icon' /> Save Post
                    </MenuItem>
                    <MenuItem>
                        <FaFlag className='post-top-right-menu-icon' /> Report Post
                    </MenuItem>
                    <MenuItem>
                        <MdOutlineModeEditOutline className='post-top-right-menu-icon' /> Edit Post
                    </MenuItem>
                    <MenuItem>
                        <FaTrashAlt className='post-top-right-menu-icon' /> Delete Post
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ImLink className='post-top-right-menu-icon'>
                            <PersonAdd fontSize="small" />
                        </ImLink>
                        Open post in new tab
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default PostTop;