export function chunkArray<T>(array: T[], size: number): T[][] {
  return array.reduce((acc: T[][], _, index: number) => {
    if (index % size === 0) {
      acc.push(array.slice(index, index + size)); // 새로운 청크를 추가
    }
    return acc;
  }, []);
}
