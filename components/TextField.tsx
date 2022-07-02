import styles from '../styles/TextField.module.css';
import { Input, Typography } from '@mui/material';
import React from 'react';

const TextField = (props: {key: string}) => {
    const name = props.key;
    return (
        <div className={styles.textField}>
            <p style={{ color: 'white' }}>{name}</p>
            <Input style={{ borderBottomColor: 'rgba(255,255,255,0.42)' }}></Input>
        </div>
    );
};

export default TextField;
