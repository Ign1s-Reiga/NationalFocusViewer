import type { NextPage } from 'next'
import { Menu as MenuIcon, Add as AddIcon, Download as DownloadIcon, Upload as UploadIcon } from '@mui/icons-material';
import React from 'react'
import styles from '../styles/Home.module.css'
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { Header } from '../components/Header';

const files = [
    'ENG_Focus1',
    'ENG_Focus2',
    'ENG_Focus3',
    '...'
]

const Home: NextPage = () => {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.container}>
                <div className={styles.sidebar}>

                </div>
            </div>
        </div>
    )
}

export default Home
