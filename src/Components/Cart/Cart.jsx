const Cart = ({selectedCourse, creditTime}) => {
    return (
        <div className="w-1/4 bg-base-100 h-96 p-4 rounded-xl space-y-4">
            <h2 className="text-xl font-bold text-[#2F80ED]">Credit Hour Remaining  hr </h2>
            <hr />
            <h2 className="text-2xl font-bold">Course Name</h2>
            <ul className="list-decimal list-inside">
                {
                    selectedCourse.map((course, idx) => <li key={idx}>{course.name}</li> )
                }
            </ul> 
            <hr />
            <h3>Total Credit Hour: {creditTime}</h3>
            <hr />
            <h3>Total Price: 0</h3>
        </div>
    );
};

export default Cart;