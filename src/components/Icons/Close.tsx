// AddCircle24px
import { memo } from 'react';
import CloseSVG from './../../assets/icons/close.svg';

const CloseIcon = () => {
    return <img src={CloseSVG} alt="Circle Icon" />;
};

export default memo(CloseIcon);
