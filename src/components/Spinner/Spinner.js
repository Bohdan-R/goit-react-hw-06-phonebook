import React from 'react';
import Loader from 'react-loader-spinner';
import './Spinner.scss';

const Spinner = () => (
  <div className="box-spinner">
    <Loader
      className="Spiner"
      type="TailSpin"
      color="#3f51b5"
      height={40}
      width={40}
    />
  </div>
);

export default Spinner;
