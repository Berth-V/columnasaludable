import './Loader.css';
import { motion } from 'motion/react';
import LoaderLogo from '../../assets/entradalogo.png';

const SPIN_TIME = 1;      // 2 giros
const CURTAIN_TIME = 0.3;   // salida telón

function Loader({ isLoading }) {
    const exiting = !isLoading;

    return (
        <motion.div
            className="loader"
            initial={{ x: 0 }}
            animate={exiting ? { x: '-100%' } : { x: 0 }} // telón a la izquierda
            transition={
                exiting
                    ? { duration: CURTAIN_TIME, ease: 'easeInOut', delay: CURTAIN_TIME }
                    : { duration: 0 }
            }
        >
            <div className="loader__stage">
                <motion.img
                    className="loader__img"
                    src={LoaderLogo}
                    alt="Loading"
                    initial={{ rotateY: 0, opacity: 1, x: 0 }}
                    animate={
                        exiting
                            ? {
                                x: -60,        // acompaña el telón
                                opacity: 0
                            }
                            : {
                                rotateY: [0, 360, 720] // 2 giros en Y
                            }
                    }
                    transition={
                        exiting
                            ? { duration: 0.3, ease: 'easeOut', delay: SPIN_TIME }
                            : { duration: SPIN_TIME, ease: 'easeInOut' }
                    }
                    style={{
                        transformStyle: 'preserve-3d',
                        transformPerspective: 1200,
                        backfaceVisibility: 'visible'
                    }}
                />
            </div>
        </motion.div>
    );
}

export default Loader;
