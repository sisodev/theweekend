import User from "../components/user";

export default function UsersList({users}) {
    return (
        <div>
            <h1>List of Users</h1>
            {
                users.map(user => <User user={user}/>)
            }
        </div>
    )
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data)
    return {
        props: {
            users: data
        }
    }
}