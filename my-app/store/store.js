'use client'

import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '@/store/dataSlice.js'

 const store = configureStore({
  reducer: {
    data:dataSlice
  },
});


export default store;
