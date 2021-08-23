export default function Course({program_code, start_date}) {
    return (
        <div>
            <h2>{program_code}</h2>
            <p>{start_date}</p>
        </div>
    );
}