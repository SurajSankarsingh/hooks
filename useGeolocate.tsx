//geolocate hook made with react-hooks and Geolocation API

import { useState } from 'react';

const useGeolocate = () => {
  const [locErrorMsg, setLocErrorMsg] = useState('');
  const [latLong, setLatLong] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const success = (position: { coords: { latitude: any; longitude: any } }) => {
    const { latitude, longitude } = position.coords;

    setLatLong(`${latitude},${longitude}`);

    setLocErrorMsg('');
    setIsLoading(false);
  };

  const error = () => {
    setIsLoading(false);
    setLocErrorMsg('We are unable to retrieve your location');
  };

  const handleGeolocate = () => {
    setIsLoading(true);
    if (!navigator.geolocation) {
      setLocErrorMsg(
        'It looks like geolocation is not supported by your browser'
      );
      setIsLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    latLong,
    locErrorMsg,
    isLoading,
    handleGeolocate,
  };
};

export default useGeolocate;
