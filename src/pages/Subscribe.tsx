import { DesktopTower, DeviceMobile, EnvelopeOpen, FileCode, FileDoc, GoogleLogo, MicrosoftExcelLogo } from "phosphor-react";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FrameSubscriber } from "../components/FrameSubscriber";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";



export function Subscribe() {
    const navigate = useNavigate()

    const[name, setName]= useState('');
    const[email, setEmail]= useState('');

    const[createSubscriber,{loading}]= useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent){
        event?.preventDefault()

       await createSubscriber({
            variables:{
                name,
                email,
            }
        })

        navigate('/event')
        
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className=" w-full max-w-[1100px]  lg:flex items-center justify-between sm:mt-4 lg:mt-20 mx-auto">

                <div className="mt-4 p-4 lg:p-8 lg: max-w-[640px] text-center  ">
                    <Logo />
                    <h1 className=" mt-4 lg:mt-8 lg:text-[2.5rem] text-[1.9rem]  leading-tight uppercase">
                        Aprenda Ferramentas <strong className="text-blue-500">Gratuitamente </strong> de uma maneira divertida
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed text-sm">
                        Uma forma diferente de aprender, com projetos reais.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 borer border-gray-500 rounded">
                    <strong className="lg:text-2xl text-lg mb-6 block">
                        Inscreva-se Gratuitamente

                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                            <input
                                type="text"
                                className="bg-gray-900 rounded px-5 h-14"
                                placeholder="Seu nome Completo"
                                onChange={event => setName(event.target.value)}
                            />
                            <input
                                className="bg-gray-900 rounded px-5 h-14"
                                type="email"
                                placeholder="Digite seu e-mail"
                                onChange={event => setEmail(event.target.value)}
                            />

                            <button 
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                            disabled={loading}
                            type="submit">
                                Garantir minha vaga
                            </button>

                        </form>
                    </strong>
                </div>

            </div>
            <div className=" w-full">
                <FrameSubscriber />
                
            </div>

            <div className="  display: flex w-full animate-rotagem gp-6 space-x-16">
                
                <MicrosoftExcelLogo size={70} color='blue' />
                
                <GoogleLogo size={70} color='blue'  />  
                
                <DesktopTower size={70} color='blue'/>

                <DeviceMobile size={70} color='blue'/>

                <EnvelopeOpen size={70} color='blue' />

                <FileDoc size={70} color='blue'/>

                <FileCode size={70} color='blue' />
                
               
            </div>
                
           
            

            
          
        </div>
    )
}