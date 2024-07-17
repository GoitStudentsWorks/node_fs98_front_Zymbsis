import React, { useState } from 'react';
import { Icon } from 'shared';
import css from './AddWaterBtn.module.css';



const AddWaterBtn = ({ addWater }) => {

import { useModal } from '../../../context';
import WaterModal from '../../modal/WaterModal/WaterModal';

const AddWaterBtn = ({ addWater }) => {
  const { openModal } = useModal();
  const handleClick = () => {
    openModal(<WaterModal type={'add'} />);
  };


  return (
    <div className={css.container}>
      <button type="button" className={css.addWaterBtn} onClick={handleClick}>
        <div className={css.iconPlusWrap}>
          <Icon iconId="icon-plus" className={css.iconPlus} />
        </div>
        Add water
      </button>
    </div>
  );
};

// const AddWaterBtn = () => {
//   const { openModal } = useModal();
//   const handleClick = () => {
//     openModal(<WaterModal type={'add'} />);
//   };

//   return (
//     <div>
//       <Button onClick={handleClick} className={css.btn} type="button">
//         <div className={css.thumb}>
//           <Icon iconId="icon-plus" className={css.iconstyle} />
//           <span className={css.boldtext}>Add water</span>
//         </div>
//       </Button>
//     </div>
//   );
// };

export default AddWaterBtn;
