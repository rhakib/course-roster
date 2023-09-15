import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {

    const [courseList, setCourseList] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [creditTime, setCreditTime] = useState(0);
    const [remainingHour, setRemainingHour] = useState(20)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourseList(data))
    }, [])

    const handleSelected = (course) => {
        const isExist = selectedCourse.find(item => item.id == course.id)
        let creditCount = course.credit;
        let priceCount = course.price;
        if (isExist) {
            return alert('already taken')
        } else {
            selectedCourse.map(credithour => {
                creditCount = creditCount + credithour.credit;
            })

            const totalRemainingHour = 20 - creditCount;
            if (creditCount > 20) {
                return alert('cant add more')
            }
            selectedCourse.map(price => {
                priceCount = priceCount + price.price;
            })
            console.log(priceCount);
            const newCourseList = [...selectedCourse, course];
            setSelectedCourse(newCourseList);
            setCreditTime(creditCount)
            setRemainingHour(totalRemainingHour);
            setTotalPrice(priceCount)

        }

    }

    return (
        <div className="flex gap-10 mt-6 max-w-[1400px] mx-auto">
            <div className="w-3/4 grid grid-cols-3 gap-4 text-center">
                {
                    courseList.map(course => (<div key={course.id} className="bg-base-100 rounded-xl p-4 w-[330px] space-y-4">
                        <figure><img className="w-[320px]" src={course.img} alt="Shoes" /></figure>
                        <div className="space-y-3">
                            <h2 className="text-left text-[18px] font-bold">{course.name}</h2>
                            <p className="text-left">{course.course_details}</p>
                            <div className="flex justify-between">
                                <p>$ Price: {course.price}</p>
                                <p>$ Credit: {course.credit}</p>
                            </div>
                            <button onClick={() => handleSelected(course)} className="py-2 rounded-md font-semibold text-white bg-[#2F80ED] w-full">Select</button>
                        </div>
                    </div>))
                }
            </div>
            <div className="h-96 w-1/4">
                <Cart totalPrice={totalPrice}remainingHour={remainingHour} creditTime={creditTime} selectedCourse={selectedCourse}></Cart>
            </div>
        </div>

    );
};

export default Home;