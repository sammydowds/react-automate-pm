import React from 'react';
import { Spinner } from 'reactstrap'; 

export const Loading = () => {
  return (
    <div className="h-100 text-center align-middle">
      <Spinner type="grow" color="#ffa41b" />
    </div>
  );
};
