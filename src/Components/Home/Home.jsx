import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
// import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            return toast("You already added this item!");
        } else {
            selectedCourse.map(credithour => {
                creditCount = creditCount + credithour.credit;
            })

            const totalRemainingHour = 20 - creditCount;
            if (creditCount > 20) {
                return toast("You can't exceed 20 hours limit");
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
        <div className="flex flex-col md:flex-row gap-10 mt-8 max-w-[1400px] mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center px-4 md:px-0 ml-4 md:ml-0">
                {
                    courseList.map(course => (<div key={course.id} className="bg-base-100 rounded-xl p-4 lg:w-[330px] space-y-4">
                        <figure><img className="w-[400px] md:w-[320px]" src={course.img} alt="Shoes" /></figure>
                        <div className="space-y-4">
                            <h2 className="text-left text-[18px] font-bold">{course.name}</h2>
                            <p className="text-left text-[#1C1B1B99]">{course.course_details}</p>
                            <div className="flex justify-between">
                                <div className=' flex items-center gap-2'>
                                    <FiDollarSign className='text-2xl' />
                                    <p className='text-[#1C1B1B99] text-[18px]'> Price: {course.price}</p>
                                </div>
                                <div className=' flex items-center gap-3'>
                                    <BsBook className='text-xl' />
                                    <p className='text-[#1C1B1B99] text-[18px]'>Credit: {course.credit}hr</p>
                                </div>
                            </div>
                            <button onClick={() => handleSelected(course)} className="py-2 rounded-md font-semibold text-white bg-[#2F80ED] w-full">Select</button>
                        </div>
                    </div>))
                }
            </div>
            <div className="h-96 md:w-1/4 px-4 md:px-0 ml-4 md:ml-0">
                <Cart totalPrice={totalPrice} remainingHour={remainingHour} creditTime={creditTime} selectedCourse={selectedCourse}></Cart>
            </div>
            <ToastContainer></ToastContainer>
        </div>
        

    );
};

export default Home;