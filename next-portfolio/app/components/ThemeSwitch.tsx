import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from '../scss/themeswitch.module.scss';

interface ThemeSwitchProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, toggleTheme }) => {
    return (
        <motion.button
            className={styles.switch}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {theme === 'light' ? <FaMoon size={20} color="#4a4a4a" /> : <FaSun size={20} color="#f1c40f" />}
        </motion.button>
    );
};

export default ThemeSwitch;
