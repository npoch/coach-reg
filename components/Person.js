import styled from 'styled-components';

const StyledPerson = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr) 2fr repeat(2, 1fr) 1.5fr 1fr;
    margin: 10px 0;
`;

export default function Person({ person }) {
    
    return <StyledPerson className="person" >
            <div className="person-field fname">{person['First Name']}</div>
            <div className="person-field lname">{person['Last Name']}</div>
            <div className="person-field phone">{person.Phone}</div>
            <div className="person-field email">{person.Email}</div>
            <div className="person-field city">{person.City}</div>
            <div className="person-field center">{person.Centre}</div>
            <div className="person-field source">{person['Source person']}</div>
            <div className="person-field role">{person.Role}</div>
            {/* <div className="person-field pcode">{person['Program Code - Timezone and Start Date']}</div> */}
        </StyledPerson>
    
}