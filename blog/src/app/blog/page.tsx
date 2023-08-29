import {getAllPosts} from "@/utils/getAllPosts";
import PostType from '@/interfaces/post'

type Props = {
  params: {
    allPosts: PostType[]
  },
}
export default function Example({ params: { allPosts } }: Props) {
  console.log(allPosts)
  return <>블로그페이지

    {/*{allPosts.map((post)=>{*/}
    {/*  return(<>{post.title}</>)*/}
    {/*})}*/}
  </>;
}

export async function generateStaticParams():Promise<any[]> {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  console.log("a", allPosts)

  return allPosts
}