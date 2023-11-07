import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export const toDateString = (date: Date) => {
  const options: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  if (date === undefined) {
    return new Date().toLocaleDateString('ko-kr', options);
  }
  return new Date(date).toLocaleDateString('ko-kr', options);
};
