import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Divider, List, ListItemButton, Stack, Typography } from '@mui/material';
import { Header } from '../components/Header';
import NFContainer from '../components/NFContainer';
import React from 'react';

const files = [
    'ENG_Focus1',
    'ENG_Focus2',
    'ENG_Focus3',
    '...'
]

const Index: NextPage = () => {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.container}>
                <Stack className={styles.sidebar}>
                    <Typography className={styles.sidebartitle}>NF Explorer</Typography>
                    <Divider sx={{bgcolor: 'slategray'}}/>
                    <List>
                        {files.map(v => (
                            <ListItemButton className={styles.sidebarbutton} key={v}>
                                <Typography variant={'body2'}>{v}</Typography>
                            </ListItemButton>
                        ))}
                    </List>
                    <input type={'radio'} className={styles.sidebarbuttontest}/>
                </Stack>
                <NFContainer selectedItem={'unko'}/>
            </div>
        </div>
    )
}

export default Index
