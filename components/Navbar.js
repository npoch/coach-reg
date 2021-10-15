import NavStyles from "./styles/NavStyles"


import Link from 'next/link';

export async function getServerSideProps({ query }) {


}


export default function Navbar({ posts }) {
  console.log(posts);
    return <NavStyles>
        nav goes here
    </NavStyles>
}