
export const NavDesk = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-1/3">
        <div>
        <img  src="platzi_logo.png"  alt="" />
        </div>
        <ul>
          <li>All</li>
          <li>Clothes</li>
          <li>Electronics</li>
          <li>Furnitures</li>
          <li>Toys</li>
          <li>Others</li>
        </ul>
      </div>
      <div className="flex flex-row ">
         <p>@platzi_fashion</p>     
          <p>My Orders</p>
          <p>My Account</p>
          <button>Sign In</button>
      </div>
    </div>
  )
}