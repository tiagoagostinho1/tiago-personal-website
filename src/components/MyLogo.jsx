import myLogo from '/TA.svg';

export function MyLogo( { size } ){
    return(
        <img 
            src={myLogo}
            className="logo"
            alt="Tiago Agostinho logo"
            height={size}
        />
    );
}