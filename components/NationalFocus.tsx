import { INationalFocus } from '../lib/nationlFocusConverter';
import styles from '../styles/NationalFocus.module.css';
import React from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';

const NationalFocus = (props: {nfData: INationalFocus}) => {
    const [contextMenu, setContextMenu] = React.useState<{
        id: string
        mouseX: number;
        mouseY: number;
    } | null>(null);

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    id: event.currentTarget.id,
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
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    const convertXCoordinate = (xCoords: number): number => {
        if (process.browser) {
            const elem = document.getElementById('nfContainer');
            if (elem === null)
                return xCoords;
            return (elem.offsetWidth / 2) + xCoords * 10;
        }
        return 0;
    }

    return (
        <div id={'nationalFocus'} className={styles.nationalFocus} style={{top: props.nfData.y * 5, left: convertXCoordinate(props.nfData.x)}}>
            <img src={props.nfData.icon === null ? '/icon.png' : props.nfData.icon} alt={''} style={{zIndex: 5}}/>
            <img src={'/focus_can_start_bg.png'} alt={''} style={{zIndex: 7, width: '96px', marginTop: '-1rem'}}/>
            <Typography className={styles.nationalFocusName}>{props.nfData.title.value}</Typography>
            <Menu
                open={(contextMenu !== null && contextMenu.id === 'nationalFocus')}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                }
                PaperProps={{sx: {bgcolor: '#202020', color: 'white'}}}
            >
                <MenuItem onClick={handleClose}>開く</MenuItem>
                <MenuItem onClick={handleClose}>コピー</MenuItem>
                <MenuItem onClick={handleClose}>削除</MenuItem>
            </Menu>
        </div>
    )
}

export default NationalFocus
