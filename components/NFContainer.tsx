import styles from '../styles/NFContainer.module.css'
import { INationalFocus } from '../lib/nationlFocusConverter';
import React from 'react';
import { Button, Divider, Input, Menu, MenuItem, Typography } from '@mui/material';
import NationalFocus from './NationalFocus';
import TextField from './TextField';

const nfs: INationalFocus[] = [
    {
        id: 'test1',
        icon: null,
        cost: 7,
        x: 5,
        y: 2,
        title: {key: 'TITLE', value: 'てすと1'},
        desc: {key: 'DESC', value: '説明'},
        memo: 'NONE',
        relativePositionId: null,
        prerequisite: null,
        mutuallyExclusive: null,
        searchFilters: [],
        aiWillDo: {factor: 1, modifier: {}},
        completeReward: '',
        completeTooltip: '',
    },
    {
        id: 'test2',
        icon: null,
        cost: 7,
        x: -5,
        y: 2,
        title: {key: 'TITLE', value: 'てすと2'},
        desc: {key: 'DESC', value: '説明'},
        memo: 'NONE',
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
        mouseX: number;
        mouseY: number;
    } | null>(null);
    const [showAddMenu, setShowAddMenu] = React.useState(false);

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
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

    const handleAddNF = () => {
        handleClose();
        setShowAddMenu(true);
    };

    return (
        <div id={'nfContainer'} className={styles.nfContainer} onContextMenu={handleContextMenu} onKeyUp={handleKeyUp}>
            <img src={'/tiled_bg.png'} alt={''} className={styles.nfContainerBg}/>
            <img src={'/tiled_focus_bg.png'} alt={''} className={styles.nfContainerFocusBg}/>
            {nfs.map(v => <NationalFocus nfData={v} key={v.id}/>)}
            <Menu
                open={(contextMenu !== null && !showAddMenu)}
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
                <MenuItem onClick={handleAddNF}>NFを追加</MenuItem>
            </Menu>
            {showAddMenu ?
                <div className={styles.nfContainerAddMenuBg}>
                    <div className={styles.nfContainerAddMenu}>
                        <Typography variant={'h4'} style={{textAlign: 'center', color: 'whitesmoke'}}>NFの追加</Typography>
                        <Divider sx={{bgcolor: 'slategray', margin: '1.3rem 0'}} flexItem/>
                        <div className={styles.nfContainerAddMenuInput}>
                            <TextField key={'タイトル'}/>
                        </div>
                        <Button onClick={() => setShowAddMenu(false)}>Close</Button>
                    </div>
                </div> : ''
            }
        </div>
    )
};

export default NFContainer
