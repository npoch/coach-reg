
import Person from '../../components/Person';

export async function getServerSideProps({ query }) {


    // Result
    
    // const stuff = response.data.values;
    // const array = stuff.map(item => {
    //     let thing = {'timestamp': parseInt(item[0]),
    //     'first_name': item[1],
    //     'last_name': item[2],
    //     'preferred_name': item[3],
    //     'phone': item[4],
    //     'alt_phone ': item[5],
    //     'SERIAL': item[6],
    //     'email_address': item[7],
    //     'email': item[8],
    //     'city': item[9],
    //     'centre': item[10],
    //     'source_person': item[11],
    //     'role': item[12],
    //     'program_code': item[13]}
    //     return thing;
    // })
    
}

export default function Post({ team }) {
    
    return (
        <div id="team">
            {team.map((person) => (
                <Person key={person.timestamp} person={person} />
            ))}
        </div>
    )
}