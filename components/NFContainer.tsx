import styles from '../styles/NFContainer.module.css'
import { INationalFocus } from '../lib/nationlFocusConverter';
import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import NationalFocus from './NationalFocus';

const nfs: INationalFocus[] = [
    {
        id: 'てすと1',
        icon: null,
        cost: 7,
        x: 5,
        y: 2,
        relativePositionId: null,
        prerequisite: null,
        mutuallyExclusive: null,
        searchFilters: [],
        aiWillDo: {factor: 1, modifier: {}},
        completeReward: '',
        completeTooltip: '',
    },
    {
        id: 'てすと2',
        icon: null,
        cost: 7,
        x: -5,
        y: 2,
        relativePositionId: null,
        prerequisite: null,
        mutuallyExclusive: null,
        searchFilters: [],
        aiWillDo: {factor: 1, modifier: {}},
        completeReward: '',
        completeTooltip: '',
    }
]

const NFContainer = (props: {selectedItem: string}) => {
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
    };

    const handleKeyUp = (event: React.KeyboardEvent) => {
        event.preventDefault();
        if ('Escape' === event.key)
            handleClose();
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    return (
        <div id={'nfContainer'} className={styles.nfContainer} onContextMenu={handleContextMenu} onKeyUp={handleKeyUp}>
            <img src={'/tiled_bg.png'} alt={''} className={styles.nfContainerBg}/>
            <img src={'/tiled_focus_bg.png'} alt={''} className={styles.nfContainerFocusBg}/>
            {nfs.map(v => <NationalFocus nfData={v} key={v.id}/>)}
            <Menu
                open={(contextMenu !== null && contextMenu.id === 'nfContainer')}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                }
                PaperProps={{sx: {bgcolor: '#202020', color: 'white'}}}
            >
                <MenuItem onClick={handleClose}>ペースト</MenuItem>
                <MenuItem onClick={handleClose}>NFを追加</MenuItem>
            </Menu>
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

export default NFContainer
