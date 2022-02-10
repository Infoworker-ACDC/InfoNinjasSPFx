import * as React from "react";
import styles from './OpsStats.module.scss';

export const OpsStatsCases = (): JSX.Element => {
    return (
        <div className={styles.OpsStats}>
            <div className={styles.Box}>
                <div className={styles.Title}>Reported crimes</div>
                <div className={styles.Numbers}>54</div>
                <div className={styles.SubGrid}>
                    <div className={styles.center}>
                        <div>34</div>
                        <div>solved</div>
                    </div>
                    <div className={styles.center}>
                        <div>10</div>
                        <div>en route</div>
                    </div>
                    <div className={styles.center}>
                        <div>2</div>
                        <div>in action</div>
                    </div>
                </div>
            </div>
        </div>        
    );
};

export const OpsStatsNinjas = (): JSX.Element => {
    return (
        <div className={styles.OpsStats}>
            <div className={styles.Box}>
                <div className={styles.Title}>Ninjas</div>
                <div className={styles.Numbers}>10</div>
                <div className={styles.SubGrid}>
                    <div className={styles.center}>
                        <div>5</div>
                        <div>idle</div>
                    </div>
                    <div className={styles.center}>
                        <div>2</div>
                        <div>en route</div>
                    </div>
                    <div className={styles.center}>
                        <div>3</div>
                        <div>in action</div>
                    </div>
                </div>
            </div>
        </div>        
    );
};

export const OpsStatsVillains = (): JSX.Element => {
    return (
        <div className={styles.OpsStats}>
            <div className={styles.Box}>
                <div className={styles.Title}>Villains</div>
                <div className={styles.Numbers}>87</div>
                <div className={styles.SubGrid}>
                    <div className={styles.center}>
                        <div>54</div>
                        <div>unknown</div>
                    </div>
                    <div className={styles.center}>
                        <div>23</div>
                        <div>reported</div>
                    </div>
                    <div className={styles.center}>
                        <div>7</div>
                        <div>in action</div>
                    </div>
                </div>
            </div>
        </div>        
    );
};