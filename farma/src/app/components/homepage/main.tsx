interface MainProps {
    
}
 
const Main: FunctionComponent<MainProps> = () => {
    return ( <main className="bg-radial from-[#AAADB2] to-[#C8C9CB] h-[500px] relative flex items-center">
        <div className="w-[429px] h-[324px] text-[#F5F6F6] absolute left-[100px]">
            <h1 className="h-[96px]">Ut viverra viverra phasellus id in eleifend.</h1>
            <ul className="mt-[30px] bg-testred">
                <li>Ut viverra viverra phasellus id in eleifend.</li>
                <li>Ut viverra viverra phasellus id in eleifend.</li>
                <li>Ut viverra viverra phasellus id in eleifend.</li>
            </ul>
        </div>
    </main> );
}
 
export default Main;