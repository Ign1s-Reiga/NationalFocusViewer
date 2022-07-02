import { INationalFocus } from '../lib/nationlFocusConverter';
import styles from '../styles/NationalFocus.module.css';
import React from 'react';
import { Button, Divider, Menu, MenuItem, Typography } from '@mui/material';
import TextField from './TextField';

const NationalFocus = (props: {nfData: INationalFocus}) => {
    const [contextMenu, setContextMenu] = React.useState<{
        mouseX: number;
        mouseY: number;
    } | null>(null);
    const [showEditMenu, setShowEditMenu] = React.useState(false)

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                } : null,
        );
        event.stopPropagation();
    };

    const handleKeyUp = (event: React.KeyboardEvent) => {
        event.preventDefault();
        if ('Escape' === event.key)
            handleClose();
        event.stopPropagation();
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    const handleOpenEditMenu = () => {
        handleClose();
        setShowEditMenu(true)
    };

    return (
        <>
            <div id={'nationalFocus'} className={styles.nationalFocus} style={{top: props.nfData.y * 5, left: `calc(50% + (${props.nfData.x}px * 10))`}} onContextMenu={handleContextMenu} onKeyUp={handleKeyUp}>
                <img src={props.nfData.icon === null ? '/icon.png' : props.nfData.icon} alt={''} style={{zIndex: 5}}/>
                <img src={'/focus_can_start_bg.png'} alt={''} style={{zIndex: 7, width: '96px', marginTop: '-1rem'}}/>
                <Typography className={styles.nationalFocusName}>{props.nfData.title.value}</Typography>
                <Menu
                    open={contextMenu !== null}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={
                        contextMenu !== null
                            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                            : undefined
                    }
                    PaperProps={{sx: {bgcolor: '#202020', color: 'white'}}}
                >
                    <MenuItem onClick={handleOpenEditMenu}>開く</MenuItem>
                    <MenuItem onClick={handleClose}>コピー</MenuItem>
                    <MenuItem onClick={handleClose}>削除</MenuItem>
                </Menu>
            </div>
            <div className={styles.nationalFocusEditMenu} style={showEditMenu ? {left: `calc(100% - 400px)`, transition: 'left 0.2s ease-out'} : {left: '100%', transition: 'left 0.2s ease-out'}}>
                <Typography variant={'h4'} style={{ color: 'white', textAlign: 'center' }}>編集</Typography>
                <Divider flexItem sx={{bgcolor: 'slategray', margin: '1.3rem 1.8rem'}}/>
                <TextField key={'タイトル'}/>
                <Button onClick={() => setShowEditMenu(false)}>閉じる</Button>
            </div>
        </>
    )
}

export default NationalFocus
