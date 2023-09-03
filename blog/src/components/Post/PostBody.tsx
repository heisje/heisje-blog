import markdownStyles from './markdown.module.css';

export default function PostBody({ content }: any) {
  return (
    <article className="max-w-2xl mx-auto">
      <div className={`${markdownStyles['markdown']}`} dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
