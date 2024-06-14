import { FilterAltOutlined, FilterListOutlined, Search } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React from 'react'
import './FilterComponent.scss'
import InstanceList from '../Instances/InstanceList/InstanceList.tsx';

export default function FilterComponent() {

  const sort = [
    { value: "", label: "All" },
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
  ];

  return (
    <div>
      <div className='filter-component'>
      <Search/>
      <TextField id='search-field' variant="standard"/>
      <div className='filter-component-sort'>
        <FilterListOutlined/>
        Sort: <span>Latest</span>
      </div>
      <div className='filter-component-filter'>
        <FilterAltOutlined/>
        Filter <span>(0)</span>
      </div>
      
    </div>
    <InstanceList/>
    </div>
  )
}
