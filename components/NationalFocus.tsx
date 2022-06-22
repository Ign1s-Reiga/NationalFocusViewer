import { INationalFocus } from '../lib/nationlFocusConverter';
import styles from '../styles/NationalFocus.module.css';
import React from 'react';
import { Typography } from '@mui/material';

const NationalFocus = (props: {nfData: INationalFocus}) => {
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
            <Typography className={styles.nationalFocusName}>{props.nfData.id}</Typography>
        </div>
    )
}

export default NationalFocus
