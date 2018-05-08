/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import OnsetPicker from '../../lib/OnsetPicker';

const picker = () => (
  <div>
    <p>Birthdate: {moment().subtract(6, 'years').format('YYYY-MM-DD')}</p>
    <OnsetPicker
      birthdate={moment().subtract(6, 'years').format()}
      granularitySelectName="doogs-granularity"
      precisionSelectName="doogs-precision"
      onsetDateInputName="doogs-onsetDate"
    />
  </div>
);

export default picker;
