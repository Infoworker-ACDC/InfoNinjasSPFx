import * as React from 'react';
import styles from './CovertOps.module.scss';
import { ICovertOpsProps } from './ICovertOpsProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { OpsStatsCases, OpsStatsNinjas, OpsStatsVillains } from './layout/OpsStats';

export default class CovertOps extends React.Component<ICovertOpsProps, {}> {
  public render(): React.ReactElement<ICovertOpsProps> {
    return (
      <div className={ styles.covertOps }>        
        <div className={ styles.container }>
          <div className={ styles.row }>
            <OpsStatsCases />
            <OpsStatsNinjas />
            <OpsStatsVillains />
          </div>
        </div>
      </div>
    );
  }
}
