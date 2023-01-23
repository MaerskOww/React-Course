import React from 'react';

import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = () => {
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  const { isSaving, active } = useSelector(state => state.journal);

  return (
    <JournalLayout>
      {
        !!active
          ? <NoteView />
          : <NothingSelectedView />
      }

      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: ' white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
        disabled={isSaving}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
