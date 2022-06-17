import type { NextPage } from 'next'
import { Menu as MenuIcon, Add as AddIcon, Download as DownloadIcon, Upload as UploadIcon } from '@mui/icons-material';
import React from 'react'
import styles from '../styles/Home.module.css'
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { Header } from '../components/Header';

const Home: NextPage = () => {


    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.container}>
                s
            </div>
        </div>
    )
}

export default Home
