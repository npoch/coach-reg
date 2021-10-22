import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 20px;
  padding: 7px 10px;
  margin: 5px;
  background-color: lightgray;
  color: black;
  height: fit-content;
`

// export default ({ href, name }) => (
//   <Link prefetch href={href}>
//     <StyledLink href={href}>{name}</StyledLink>
//   </Link>
// )

export default function Navbar({ programs }) {
    return <nav>
    <ul className="menu">
        <li><Link href="/instructions" passHref>
        <StyledLink>Instructions</StyledLink>
        </Link></li>
        <li><Link href="/new-coach" passHref>
        <StyledLink>New Coach</StyledLink>
        </Link></li>
        <li><Link href="/leader-details" passHref>
        <StyledLink>Leader Details</StyledLink>
        </Link></li>
        <li className="has-submenu"><StyledLink>Programs</StyledLink>
        <ul className="program-list">
        {programs.map((program, i) => {
          return <Link 
          key={`program-${i}`} 
          href={`/programs/${program.program_code}`} passHref>
          <StyledLink>{program.program_code}</StyledLink>
          </Link>;
        })}
        </ul>
        </li>
</ul>
    </nav>
    
}