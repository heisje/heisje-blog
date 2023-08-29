export default async function Blog() {
  console.log('aa');
  const res = await fetch(`/api/blog/1`);
  //const posts = await res.json();
  return <>블로그페이지n</>;
}
