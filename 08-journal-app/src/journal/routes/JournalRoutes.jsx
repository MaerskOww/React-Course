import React from 'react';

import { Navigate, Routes, Route } from 'react-router-dom';

import { JournalPage } from '../pages/JournalPage';

export const Journalroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
