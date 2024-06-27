import React, { FC, useEffect, useState } from 'react'
import {  RetailerFormInput, Retailers } from './Retailer';
import { BASE_URL } from '../../Utils/BASE_URL.tsx';
import { BasicCard } from '../Card/BasicCard/BasicCard.tsx';

export const RetailersList: FC = () => {
  const [retailers, setRetailers] = useState<RetailerFormInput[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/registered-retailer-list`)
      .then((res) => res.json())
      .then((data) => setRetailers(data))
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  return (
    <div>
      <BasicCard data={retailers} />
    </div>
  );
}
