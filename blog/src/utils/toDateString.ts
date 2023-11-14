import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export const toDateString = (date: Date) => {
  const options: DateTimeFormatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  };

  if (date === undefined) {
    return new Date().toLocaleDateString('ko-kr', options);
  }
  return new Date(date).toLocaleDateString('ko-kr', options);
};
