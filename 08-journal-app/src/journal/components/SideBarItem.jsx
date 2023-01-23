import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';

import { setActiveNote } from '../../store/journal';

export const SideBarItem = (props) => {
  const { id, title, body, date, imageUrls = [] } = props;

  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({id, title, body, date, imageUrls}));
  };

  const newTitle = useMemo(() => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title;
  }, [title]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText
            secondary={body}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

SideBarItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.number,
  imageUrls: PropTypes.array,
};
