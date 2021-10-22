import { google } from 'googleapis';
import Team from '../../components/Team';

export async function getServerSideProps({ query }) {

    // Auth
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });

    const resPrograms = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: 'Programs!A:A',
      });
    
      const posts = resPrograms.data.values.flat();
      const att = posts[0];
      const programs = [];
      for(let i = 1; i < posts.length; i++) {
        let temp = {[att]: posts[i]};
        programs.push(temp);
      }

    // Query

    const program_code = query;
    const range = `Form Responses 2!A:N`;

    const resTeam = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });

    // Result

    const team = resTeam.data.values;
    const personAtt = team[0];
    let teamArray = [];
    for(let i = 1; i < team.length; i++) {
      let temp = {};
      for(let j = 0; j < personAtt.length; j++) {
        temp[personAtt[j]] = team[i][j];
      }
      teamArray.push(temp);
    }
    
    const thisTeam = teamArray.filter((person) => person['Program Code - Timezone and Start Date'] === program_code.program_code)
    

    return { 
        props: {
            thisTeam,
            programs
        } 
    }
}

export default function Post({ thisTeam, programs }) {
    return <Team team={thisTeam} ></Team>
}