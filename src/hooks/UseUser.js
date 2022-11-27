import { useEffect, useState } from "react";


const UseUser = email => {
    const [isUser, setIsUser] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setIsUser(data.isUser);
                    setIsUserLoading(false);
                })
        }
    }, [email])
    return [isUser, isUserLoading]
};

export default UseUser;