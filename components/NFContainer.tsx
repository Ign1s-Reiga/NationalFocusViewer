import Image from 'next/image'
import styles from '../styles/NFContainer.module.css'

const NFContainer = (props: {selectedItem: string}) => {
    return (
        <div className={styles.nfContainer}>
            <Image src={'/tiled_bg.png'} alt={''} layout={'fill'}/>
            <Image src={'/tiled_focus_bg.png'} alt={''} layout={'fill'}/>
        </div>
    )
}

export default NFContainer
