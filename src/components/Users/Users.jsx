import React from 'react'
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 0, photoUrl: 'https://www.dw.com/image/50264241_303.jpg',
                followed: true, userName: 'Boris', status: 'I am a boss',
                location: { city: 'Uzhgorod', country: 'Ukraine' }
            },
            {
                id: 1, photoUrl: 'http://businesslife.today/content/uploads/2016/12/Igor-Mann-2-580x387.jpg',
                followed: true, userName: 'Igor', status: 'Brother',
                location: { city: 'Ivano-Frankivsk', country: 'Ukraine' }
            },
            {
                id: 2, photoUrl: 'http://www.world-art.ru/img/people/10000/7775/50136.jpg',
                followed: false, userName: 'Slider', status: 'Friend',
                location: { city: 'Kiev', country: 'Ukraine' }
            },
            {
                id: 3, photoUrl: 'https://www.khl.ru/images/teamplayers/10439/18998.jpg',
                followed: false, userName: 'Tomash', status: 'Kolega',
                location: { city: 'Ostrava', country: 'Ceska Republika' }
            }
        ])
    }
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <img alt='userPhoto'
                                    src={user.photoUrl} className={styles.userPhoto} />
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.userName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
            )
        }
    </div>
}

export default Users