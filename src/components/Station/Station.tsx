import React, {FC, ChangeEvent} from 'react';

import classes from './Station.module.css';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  selectedIds: string[] | null;
  id: string;
  key: string;
}

const Station: FC<Props> = ({onChange, name, selectedIds, id}) => {
  return (
    <label className={classes.station} key={id}>
      {name}
      <input
        type="checkbox"
        name={name}
        value={id}
        checked={selectedIds?.includes(id) || false}
        onChange={onChange}
      />
    </label>
  );
};

export default Station;
