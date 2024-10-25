import dayjs from 'dayjs';

const generateCgmData = () => {
  const cgmData = [];
  for (let i = 6; i >= 0; i--) {
    const day = dayjs().subtract(i, 'day');
    for (let j = 0; j <= 24; j++) {
      const temp = [
        Date.UTC(day.year(), day.month(), day.date(), j),
        Math.floor(Math.random() * 250) + 10,
      ];
      cgmData.push(temp);
    }
  }
  return cgmData;
};

const generateBasalData = () => {
  const basalData = [];
  for (let i = 6; i >= 0; i--) {
    const day = dayjs().subtract(i, 'day');
    for (let j = 0; j <= 24; j++) {
      const temp = [
        Date.UTC(day.year(), day.month(), day.date(), j),
        Math.floor(Math.random() * 2) + 1,
      ];
      basalData.push(temp);
    }
  }
  return basalData;
};

const generateBolusData = () => {
  const bolusData = [];
  for (let i = 6; i >= 0; i--) {
    const day = dayjs().subtract(i, 'day');
    for (let j = 1; j <= 3; j++) {
      const temp = [
        Date.UTC(day.year(), day.month(), day.date(), j * 5 + 2),
        j + 5,
      ];
      bolusData.push(temp);
    }
  }
  return bolusData;
};

const generateBolusIconData = () => {
  const bolusIconData = [];
  for (let i = 6; i >= 0; i--) {
    const day = dayjs().subtract(i, 'day');
    for (let j = 1; j <= 3; j++) {
      const temp = [
        Date.UTC(day.year(), day.month(), day.date(), j * 5 + 2),
        0,
      ];
      bolusIconData.push(temp);
    }
  }
  return bolusIconData;
};

export const generateData = {
  cgmData: generateCgmData,
  basalData: generateBasalData,
  bolusData: generateBolusData,
  bolusIconData: generateBolusIconData,
};
