import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {

    const [courseList, setCourseList] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourseList(data))
    }, [])

    return (        
            <div className="flex gap-10 mt-6 max-w-7xl mx-auto">
                <div className="w-3/4 grid grid-cols-3 gap-4 text-center">
                    {
                        courseList.map(course => (<div key={course.id} className="bg-base-100 rounded-lg p-4 w-[300px] space-y-4">
                            <figure><img src={course.img}alt="Shoes" /></figure>
                            <div className="space-y-3">
                                <h2 className="text-left text-[18px] font-bold">{course.name}</h2>
                                <p className="text-left">{course.course_details}</p>
                                <div className="flex justify-between">
                                    <p>$ Price: {course.price}</p>
                                    <p>$ Credit: {course.credit}</p>
                                </div>
                                <button className="py-2 rounded-md font-semibold text-white bg-[#2F80ED] w-full">Select</button>
                            </div>
                        </div>))
                    }
                </div>
                <Cart></Cart>
            </div>
        
    );
};

export default Home;