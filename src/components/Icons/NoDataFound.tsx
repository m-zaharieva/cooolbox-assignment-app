// AddCircle24px
import { memo } from 'react';
import NoDataSVG from './../../assets/Images/No_Data_Found.svg';

const NoDataFound = () => {
    return <img src={NoDataSVG} alt="No Data Found" />;
};

export default memo(NoDataFound);
