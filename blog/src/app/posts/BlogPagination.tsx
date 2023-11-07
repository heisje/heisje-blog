import styles from '@/components/Nav/Nav.module.css';
import NavLink from '@/components/Nav/NavLink';
import { FiSearch } from 'react-icons/fi';

const paths = [
  { href: '/about', text: '1' },
  { href: '/blog', text: '2' },
  { href: '/blog', text: '3' },
  { href: '/blog', text: '4' },
  { href: '/blog', text: '5' },
];

const BlogPagination = () => {
  return (
    <ul className={`${styles.boxUl} mr-2`}>
      {paths.map(({ href, text }) => {
        return (
          <li key={href}>
            <NavLink href={href} text={text} />
          </li>
        );
      })}
    </ul>
  );
};

export default BlogPagination;
