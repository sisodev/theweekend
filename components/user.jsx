export default function User({user}) {
    return (
        <div key={user.id}>
           <p>{user.name}</p>
           <p>{user.mail}</p>
         </div>
    )
}