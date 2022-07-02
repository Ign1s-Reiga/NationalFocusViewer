import styles from '../styles/Header.module.css'
import { Button, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from '@mui/material';
import { Add as AddIcon, Download as DownloadIcon, Menu as MenuIcon, Upload as UploadIcon, Settings as SettingsIcon, Close as CloseIcon, Check as CheckIcon } from '@mui/icons-material';
import React from 'react';

export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [menu, setMenu] = React.useState<string | null>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenSetting = () => {
        handleClose();
        setMenu('setting')
    }

    return (
        <div className={styles.header}>
            <span className={styles.title}>NationalFocus Viewer</span>
            <IconButton
                id={'menu-button'}
                aria-controls={open ? 'menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={styles.menuButton}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id={'menu'}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'menu-button'}}
                PaperProps={{sx: {bgcolor: '#202020', color: 'white'}}}
                transformOrigin={{ vertical: 'top', horizontal: 'right'}}
                anchorOrigin={{vertical: 40, horizontal: 30}}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon><AddIcon fontSize={'small'} sx={{color: 'white'}}/></ListItemIcon>
                    <ListItemText>Add New NFTree</ListItemText>
                </MenuItem>
                <Divider sx={{bgcolor: 'slategray', margin: '0 0.7rem'}}/>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon><UploadIcon fontSize={'small'} sx={{color: 'white'}}/></ListItemIcon>
                    <ListItemText>Import NFTree</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon><DownloadIcon fontSize={'small'} sx={{color: 'white'}}/></ListItemIcon>
                    <ListItemText>Export NFTree</ListItemText>
                </MenuItem>
                <Divider sx={{bgcolor: 'slategray', margin: '0 0.7rem'}}/>
                <MenuItem onClick={handleOpenSetting}>
                    <ListItemIcon><SettingsIcon fontSize={'small'} sx={{color: 'white'}}/></ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </MenuItem>
            </Menu>
            {menu === 'setting' ?
                <div className={styles.setting}>
                    <Stack direction={'row'} spacing={2}>
                        <Button id={'closeSetting'} onClick={() => setMenu(null)} startIcon={<CloseIcon/>}>Close</Button>
                        <Button id={'acceptSetting'} onClick={() => setMenu(null)} startIcon={<CheckIcon/>}>Apply</Button>
                    </Stack>
                </div>
                : ''
            }
        </div>
    )
}
