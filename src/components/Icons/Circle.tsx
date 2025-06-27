// AddCircle24px
import { memo } from 'react';
import CircleSVG from './../../assets/icons/circle.svg';

const CircleIcon = () => {
    return <img src={CircleSVG} alt="Circle Icon" />;
};

export default memo(CircleIcon);
