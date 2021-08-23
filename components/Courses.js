import Course from "./Course";

export default function Courses({program_code, start_date}) {
    
    return (
        <div>
            <Course key={program_code} props={program_code, start_date}/>
        </div>
    );
};