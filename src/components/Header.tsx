export function Header(){
    return(
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b  ">
            <a href="https://wa.me/5565999724938" className=" flex items-center hover:bg-green-600 transition-colors rounded-full hover:animate-bounce  ">
                <img
                className="h-16 w-16 rounded-full border-2 border-blue-500 "
                src="https://avatars.githubusercontent.com/u/97246882?v=4" alt="Imagem do Professor" 
                />
                <strong className=" lg:text-2xl text-lg p-1 text-blue-500 font-bold hover:text-white "> Por Rodrigo de Oliveira Silva</strong>
            </a>
           
            
        </header>
     
    )
}