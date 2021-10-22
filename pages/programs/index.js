import { google } from 'googleapis';
import Link from 'next/link';

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Programs!A:A',
  });

  const posts = response.data.values.flat();
  const att = posts[0];
  const programs = [];
  for(let i = 1; i < posts.length; i++) {
    let temp = {[att]: posts[i]};
    programs.push(temp);
  }
  
  
  return {
    props: {
      programs
    },
  };
}

export default function Post({ programs }) {
  return (
    <article>
      <h1>Programs</h1>
      <ul>
        {programs.map((program, i) => (
          <li key={`link-${i}`}>
            <Link href={`/programs/${program.program_code}`}>
              <a>{program.program_code}</a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
