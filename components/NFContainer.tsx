import Image from 'next/image'
import styles from '../styles/NFContainer.module.css'

const NFContainer = (props: {selectedItem: string}) => {
    return (
        <div className={styles.nfContainer}>
            <img src={'/tiled_bg.png'} alt={''} className={styles.nfContainerBg}/>
            <img src={'/tiled_focus_bg.png'} alt={''} className={styles.nfContainerFocusBg}/>
        </div>
    )
}

export default NFContainer
