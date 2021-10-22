import Person from "./Person";
import styled from "styled-components";

const StyledHeaders = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr) 2fr repeat(2, 1fr) 1.5fr 1fr;
    font-weight: bold;
`;

export default function Team({ team }) {
    const headings = Object.keys(team[0]);
    return <div className="team-grid">
        <StyledHeaders>
            <div className="fname">{headings[1]}</div>
            <div className="lname">{headings[2]}</div>
            <div className="phone">{headings[4]}</div>
            <div className="email">{headings[8]}</div>
            <div className="city">{headings[9]}</div>
            <div className="center">{headings[10]}</div>
            <div className="source">{headings[11]}</div>
            <div className="role">{headings[12]}</div>
            {/* <div className="pcode">{headings[13]}</div> */}
        </StyledHeaders>
        {team.map((person, i) => {
            return <Person key={`person-${i}`} person={person} ></Person>
        })}
    </div>
}