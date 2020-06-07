import React from 'react';
import { Spinner } from 'reactstrap'; 

export const Loading = () => {
  return (
    <div className="mt-5 h-100 text-center align-middle">
      <Spinner style={{ width: '3rem', height: '3rem' }} color="#000839" />
    </div>
  );
};
