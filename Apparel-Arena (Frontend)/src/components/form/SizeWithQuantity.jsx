

const SizeWithQuantity = ({register,size,itemsNumber}) => {
    return (
        <div>
            <div className="flex gap-4">
                <select className="flex-1 px-2 py-1 w-full bg-transparent border-b-2 border-[#6A9485] rounded-xl" {...register(size)}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="L">XXL</option>
                    <option value="XL">XXXL</option>
                </select>
                <div className="flex-1 r w-full">

                    <input placeholder="Items" className="border-b-2 w-full px-2 py-1 bg-transparent border-[#6A9485] rounded-xl" type="number" {...register(itemsNumber)} />
                </div>
            </div>
        </div>
    );
};

export default SizeWithQuantity;