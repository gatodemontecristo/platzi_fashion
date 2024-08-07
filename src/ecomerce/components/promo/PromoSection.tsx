
export const PromoSection = () => {
  return (
    <div className="relative mt-[100vh] flex items-center justify-center flex-col box-border">
        <div className="border-8 border-black w-3/4 box-border">
        <img src="../gallery/banner.jpg" alt="" />
       
        </div>
        <div className=" absolute bottom-[-200px] flex flex-col items-end w-[90%] ">
                <p className="text-[150px] font-bold">PLATZI</p>
                <p className="text-lg font-light">platzi girl studio collection</p>
                <p className="text-lg font-light">shot in lima by erick dejo</p>    
        </div>
        
    </div>
  )
}
