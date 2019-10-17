import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;
//const selectUser = state => state.user;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections  // put directory sections into state
);
