import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEditModalOpen: false,
  isDeleteModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openEditModal: state => {
      state.isEditModalOpen = true;
    },
    openDeleteModal: state => {
      state.isDeleteModalOpen = true;
    },
    closeEditModal: state => {
      state.isEditModalOpen = false;
    },
    closeDeleteModal: state => {
      state.isDeleteModalOpen = false;
    },
  },
});

export const {
  openDeleteModal,
  openEditModal,
  closeDeleteModal,
  closeEditModal,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
