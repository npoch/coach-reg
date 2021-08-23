export default function Person({person}) {
    return (
        <div className="person" >
            <div className="fname">{person.first_name}</div>
            <div className="lname">{person.last_name}</div>
            <div className="phone">{person.phone}</div>
            <div className="email">{person.email}</div>
            <div className="city">{person.city}</div>
            <div className="center">{person.centre}</div>
            <div className="source">{person.source}</div>
            <div className="role">{person.role}</div>
            <div className="pcode">{person.program_code}</div>
        </div>
    )
}