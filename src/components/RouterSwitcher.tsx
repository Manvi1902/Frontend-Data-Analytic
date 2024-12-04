import { Route, Routes }  from 'react-router-dom';
import  NotFound          from './NotFoundPage';
import  MinMaxCropTable   from './MinMaxCropTabel';
import  AverageYeildTable from './AverageYeildTabel';
import  Home              from './Home';



const RouteSwitcher = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/minmax" element={<MinMaxCropTable/>} />
      <Route path="/average" element={<AverageYeildTable/>} />
    </Routes>
  );
};

export default RouteSwitcher;