import { MoreVertOutlined } from '@mui/icons-material'
import React from 'react'

export default function InstanceList() {

  const InstanceList = [ 
    {
      'id': '1',
      'value' : 'Honest Bobs of Woolwich'
    },
    {
      'id': '2',
      'value' : 'Honest Bobs of Charlton'
    },
    {
      'id': '3',
      'value' : 'Honest Bobs of Greenwich'
    }
  ]
  
  return (
    <div className='instance-list'>
      {InstanceList.map((item) => {
        return(<div className='instance-list-item'>
          <span>{item.value}</span>
          <MoreVertOutlined/>
        </div>)
      })}
    </div>
  )
}
