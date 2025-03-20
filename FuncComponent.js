const root = ReactDOM.createRoot(document.getElementById("root"));

//Функциональный компонент Student55FS

function Student55FS() {
    const date = new Date();
    return(
        <>
        <h1 style = {{ textAlign: "center", fontSize: "30px", color: "green"}}>
            React Function Component
        </h1>
        <p className = "text-center">This is a functional component</p>
        <p>Created in: {date.toLocaleDateString()}</p>
        
        </>
    );
 }

 //Отображаем компонент
root.render(
    <>

    <Student55FS />
    <Student55FS />
    <Student55FS />

    </>
);