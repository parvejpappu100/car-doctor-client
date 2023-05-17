import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ShowBookings from './ShowBookings';
import Swal from 'sweetalert2';

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings , setBookings] = useState([]);
    console.log(bookings);

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    } , [])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                    console.log(data)
                    
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
            })
            }
          })
    }

    return (
        <div className='lg:container mx-auto my-20'>
            {
                bookings.map(booking => <ShowBookings
                key={booking._id}
                booking={booking}
                handleDelete = {handleDelete}
                ></ShowBookings>)
            }
        </div>
    );
};

export default Bookings;