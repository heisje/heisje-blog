type Props = {
  params: {
    id: string,
  },
}
export default async function Blog({ params: { id } }: Props) {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const posts = await res.json();
  return <>블로그{posts.id}</>;
}

// export async function generateStaticParams() {
//   return[
//     {
//       id:1
//     },
//     {
//       id:2
//     },{
//       id:3
//     },
//   ]
//
// }