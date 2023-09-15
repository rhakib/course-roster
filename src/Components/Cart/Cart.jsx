import PropType from 'prop-types'
const Cart = ({selectedCourse, creditTime, remainingHour, totalPrice}) => {
    return (
        <div className="bg-base-100 p-4 rounded-xl space-y-4">
            <h2 className="text-xl font-bold text-[#2F80ED]">Credit Hour Remaining {remainingHour} hr </h2>
            <hr />
            <h2 className="text-2xl font-bold">Course Name</h2>
            <ul className="list-decimal list-inside text-[#1C1B1B99] ">
                {
                    selectedCourse.map((course, idx) => <li key={idx}>{course.name}</li> )
                }
            </ul> 
            <hr />
            <h3 className='text-[#1C1B1B99] font-medium text-[18px]'>Total Credit Hour: {creditTime}</h3>
            <hr />
            <h3 className='text-[#1C1B1B99] font-semibold text-[20px]'>Total Price: ${totalPrice}</h3>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropType.array.isRequired,
    creditTime: PropType.number.isRequired,
    remainingHour: PropType.number.isRequired,
    totalPrice: PropType.number.isRequired
}

export default Cart;